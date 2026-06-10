"use client";

import { useEffect, useRef } from "react";

type FallingParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  drift: number;
  driftTarget: number;
  driftTimer: number;
};

type ReformingParticle = {
  sx: number;
  sy: number;
  tx: number;
  ty: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  wave: number;
  phaseOffset: number;
};

const settings = {
  cellSize: 4,
  startText: "Coding",
  hiddenText: "clean code, creative websites, real growth",
  releaseTestsPerFrame: 2200,
  releaseChance: 0.16,
  gravity: 1900,
  airDrag: 0.985,
  settleStepsPerFrame: 5,
  pileHoldSeconds: 0.12,
  hiddenFadeInSeconds: 0.12,
  reformDurationSeconds: 0.55,
  reformStaggerSeconds: 0.16,
  revealHoldSeconds: 0.6,
  revealFadeSeconds: 0.18,
};

export function FooterSandCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !parent || !ctx) return;

    const context = ctx;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.35);
    let cols = 0;
    let rows = 0;
    let fixedCoding = new Uint8Array();
    let codingCells: number[] = [];
    let looseCells: number[] = [];
    let falling: FallingParticle[] = [];
    let pile = new Uint8Array();
    let reforming: ReformingParticle[] = [];
    let hiddenAlpha = 0;
    let phase: "coding" | "falling" | "pile" | "hiddenFadeIn" | "reform" | "hiddenHold" | "hiddenFade" = "coding";
    let phaseTime = 0;
    let lastTime = performance.now();
    let animationId = 0;
    let isRunning = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const index = (col: number, row: number) => row * cols + col;
    const colFromIndex = (i: number) => i % cols;
    const rowFromIndex = (i: number) => Math.floor(i / cols);
    const inBounds = (col: number, row: number) => col >= 0 && col < cols && row >= 0 && row < rows;
    const rand = (min: number, max: number) => min + Math.random() * (max - min);
    const randInt = (min: number, max: number) => Math.floor(min + Math.random() * (max - min + 1));
    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
    const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const shuffle = (array: number[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    const buildCodingText = () => {
      const maskCanvas = document.createElement("canvas");
      const maskCtx = maskCanvas.getContext("2d");

      if (!maskCtx) return;

      maskCanvas.width = width;
      maskCanvas.height = height;

      const fontSize = Math.min(width * (width < 640 ? 0.34 : 0.25), height * 0.44, 175);

      maskCtx.clearRect(0, 0, width, height);
      maskCtx.fillStyle = "#fff";
      maskCtx.textAlign = "center";
      maskCtx.textBaseline = "middle";
      maskCtx.font = `900 ${fontSize}px system-ui, sans-serif`;
      maskCtx.fillText(settings.startText, width / 2, height * (width < 640 ? 0.24 : 0.3));

      const image = maskCtx.getImageData(0, 0, width, height).data;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = Math.floor(col * settings.cellSize + settings.cellSize / 2);
          const y = Math.floor(row * settings.cellSize + settings.cellSize / 2);
          const pixelIndex = (y * width + x) * 4;

          if (image[pixelIndex + 3] > 35) {
            const i = index(col, row);
            fixedCoding[i] = 1;
            codingCells.push(i);
            looseCells.push(i);
          }
        }
      }

      shuffle(looseCells);
    };

    const resetCycle = () => {
      fixedCoding.fill(0);
      pile.fill(0);
      looseCells = codingCells.slice();
      shuffle(looseCells);
      falling = [];
      reforming = [];

      for (const cell of codingCells) {
        fixedCoding[cell] = 1;
      }

      hiddenAlpha = 0;
      phase = "coding";
      phaseTime = 0;
    };

    const resize = () => {
      const bounds = parent.getBoundingClientRect();
      width = Math.max(280, Math.floor(bounds.width));
      height = Math.max(210, Math.floor(bounds.height));
      dpr = Math.min(window.devicePixelRatio || 1, 1.35);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / settings.cellSize);
      rows = Math.ceil(height / settings.cellSize);
      fixedCoding = new Uint8Array(cols * rows);
      pile = new Uint8Array(cols * rows);
      codingCells = [];
      looseCells = [];
      falling = [];
      reforming = [];
      hiddenAlpha = 0;
      phase = "coding";
      phaseTime = 0;
      buildCodingText();
      draw();
    };

    const releaseOneGrain = (cellIndex: number) => {
      const col = colFromIndex(cellIndex);
      const row = rowFromIndex(cellIndex);

      fixedCoding[cellIndex] = 0;
      falling.push({
        x: col * settings.cellSize,
        y: row * settings.cellSize,
        vx: rand(-22, 22),
        vy: rand(40, 150),
        drift: rand(-55, 55),
        driftTarget: rand(-85, 85),
        driftTimer: rand(0.18, 0.9),
      });
    };

    const releaseCoding = () => {
      if (looseCells.length === 0) {
        phase = "falling";
        phaseTime = 0;
        return;
      }

      for (let i = 0; i < settings.releaseTestsPerFrame; i++) {
        if (looseCells.length === 0) break;

        const listIndex = randInt(0, looseCells.length - 1);
        const cellIndex = looseCells[listIndex];

        if (fixedCoding[cellIndex] === 0) {
          looseCells.splice(listIndex, 1);
          continue;
        }

        const col = colFromIndex(cellIndex);
        const row = rowFromIndex(cellIndex);
        const belowEmpty = row >= rows - 1 || fixedCoding[index(col, Math.min(row + 1, rows - 1))] === 0;
        const sideEmpty =
          col <= 0 ||
          col >= cols - 1 ||
          fixedCoding[index(Math.max(col - 1, 0), row)] === 0 ||
          fixedCoding[index(Math.min(col + 1, cols - 1), row)] === 0;
        const edgeMultiplier = belowEmpty || sideEmpty ? 3.3 : 1;

        if (Math.random() < settings.releaseChance * edgeMultiplier) {
          releaseOneGrain(cellIndex);
          looseCells.splice(listIndex, 1);
        }
      }
    };

    const pileSolid = (col: number, row: number) => {
      if (row >= rows) return true;
      if (col < 0 || col >= cols) return true;
      return pile[index(col, row)] === 1;
    };

    const setPile = (col: number, row: number) => {
      if (inBounds(col, row)) {
        pile[index(col, row)] = 1;
      }
    };

    const settleFallingParticle = (p: FallingParticle) => {
      let col = Math.floor(p.x / settings.cellSize);
      let row = Math.floor(p.y / settings.cellSize);

      col = Math.max(0, Math.min(cols - 1, col));
      row = Math.max(0, Math.min(rows - 1, row));

      if (!pileSolid(col, row)) {
        setPile(col, row);
        return;
      }

      if (!pileSolid(col - 1, row)) {
        setPile(col - 1, row);
        return;
      }

      if (!pileSolid(col + 1, row)) {
        setPile(col + 1, row);
        return;
      }

      for (let y = row - 1; y >= 0; y--) {
        if (!pileSolid(col, y)) {
          setPile(col, y);
          return;
        }
      }
    };

    const updateFalling = (dt: number) => {
      for (let i = falling.length - 1; i >= 0; i--) {
        const p = falling[i];

        p.driftTimer -= dt;

        if (p.driftTimer <= 0) {
          p.driftTarget = rand(-85, 85);
          p.driftTimer = rand(0.25, 1.2);
        }

        p.drift += (p.driftTarget - p.drift) * dt * 2;
        p.vx += p.drift * dt;
        p.vy += settings.gravity * dt;
        p.vx *= settings.airDrag;
        p.vy *= settings.airDrag;
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        const col = Math.floor(p.x / settings.cellSize);
        const nextRow = Math.floor((p.y + settings.cellSize) / settings.cellSize);

        if (p.x < -60) p.x = 0;
        if (p.x > width + 60) p.x = width - settings.cellSize;

        if (nextRow >= rows || pileSolid(col, nextRow)) {
          settleFallingParticle(p);
          falling.splice(i, 1);
        }
      }

      if (phase === "falling" && falling.length === 0) {
        phase = "pile";
        phaseTime = 0;
      }
    };

    const settlePileCell = (col: number, row: number) => {
      const current = index(col, row);

      if (pile[current] !== 1) return;

      if (!pileSolid(col, row + 1)) {
        pile[index(col, row + 1)] = 1;
        pile[current] = 0;
        return;
      }

      const preferLeft = Math.random() > 0.5;
      const firstCol = preferLeft ? col - 1 : col + 1;
      const secondCol = preferLeft ? col + 1 : col - 1;

      if (!pileSolid(firstCol, row + 1)) {
        pile[index(firstCol, row + 1)] = 1;
        pile[current] = 0;
        return;
      }

      if (!pileSolid(secondCol, row + 1)) {
        pile[index(secondCol, row + 1)] = 1;
        pile[current] = 0;
      }
    };

    const settlePile = () => {
      const leftToRight = Math.random() > 0.5;

      for (let row = rows - 2; row >= 0; row--) {
        if (leftToRight) {
          for (let col = 1; col < cols - 1; col++) settlePileCell(col, row);
        } else {
          for (let col = cols - 2; col >= 1; col--) settlePileCell(col, row);
        }
      }
    };

    const collectPileCells = () => {
      const cells: number[] = [];

      for (let row = rows - 1; row >= 0; row--) {
        for (let col = 0; col < cols; col++) {
          const i = index(col, row);

          if (pile[i] === 1) {
            cells.push(i);
          }
        }
      }

      return cells;
    };

    const startReform = () => {
      const pileCells = collectPileCells();
      const targets = codingCells.slice();

      pile.fill(0);
      pileCells.sort((a, b) => rowFromIndex(b) - rowFromIndex(a));
      targets.sort((a, b) => rowFromIndex(b) - rowFromIndex(a));

      const count = Math.min(pileCells.length, targets.length);

      for (let i = 0; i < count; i++) {
        const source = pileCells[i];
        const target = targets[i];

        const sx = colFromIndex(source) * settings.cellSize;
        const sy = rowFromIndex(source) * settings.cellSize;
        const tx = colFromIndex(target) * settings.cellSize;
        const ty = rowFromIndex(target) * settings.cellSize;

        reforming.push({
          sx,
          sy,
          tx,
          ty,
          x: sx,
          y: sy,
          delay: rand(0, settings.reformStaggerSeconds),
          duration: rand(settings.reformDurationSeconds * 0.75, settings.reformDurationSeconds * 1.15),
          wave: rand(-18, 18),
          phaseOffset: rand(0, Math.PI * 2),
        });
      }

      phase = "reform";
      phaseTime = 0;
    };

    const updateReform = () => {
      hiddenAlpha = 1;
      let allArrived = true;

      for (const p of reforming) {
        const localTime = phaseTime - p.delay;

        if (localTime <= 0) {
          p.x = p.sx;
          p.y = p.sy;
          allArrived = false;
          continue;
        }

        const t = clamp01(localTime / p.duration);
        const eased = easeInOutCubic(t);
        const arc = Math.sin(eased * Math.PI);
        const wobble = Math.sin(eased * Math.PI * 2 + p.phaseOffset) * p.wave * arc;

        p.x = p.sx + (p.tx - p.sx) * eased + wobble;
        p.y = p.sy + (p.ty - p.sy) * eased - arc * height * 0.08;

        if (t < 1) {
          allArrived = false;
        }
      }

      if (allArrived) {
        for (const cell of codingCells) {
          fixedCoding[cell] = 1;
        }

        reforming = [];
        phase = "hiddenHold";
        phaseTime = 0;
        hiddenAlpha = 1;
      }
    };

    const updatePhase = (dt: number) => {
      phaseTime += dt;

      if (phase === "coding") releaseCoding();

      if (phase === "pile" && phaseTime >= settings.pileHoldSeconds) {
        phase = "hiddenFadeIn";
        phaseTime = 0;
        hiddenAlpha = 0;
      }

      if (phase === "hiddenFadeIn") {
        hiddenAlpha = Math.min(1, phaseTime / settings.hiddenFadeInSeconds);

        if (hiddenAlpha >= 1) {
          hiddenAlpha = 1;
          startReform();
        }
      }

      if (phase === "reform") updateReform();

      if (phase === "hiddenHold") {
        hiddenAlpha = 1;

        if (phaseTime >= settings.revealHoldSeconds) {
          phase = "hiddenFade";
          phaseTime = 0;
        }
      }

      if (phase === "hiddenFade") {
        hiddenAlpha = Math.max(0, 1 - phaseTime / settings.revealFadeSeconds);

        if (hiddenAlpha <= 0) {
          hiddenAlpha = 0;
          resetCycle();
        }
      }
    };

    function drawHiddenText() {
      if (hiddenAlpha <= 0) return;

      context.save();
      context.globalAlpha = hiddenAlpha * 0.78;
      context.fillStyle = "rgb(255, 236, 178)";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = "900 16px system-ui, sans-serif";
      context.fillText(settings.hiddenText, width / 2, height - 28);
      context.restore();
    }

    function drawCells(cells: Uint8Array) {
      context.fillStyle = "rgb(255, 216, 121)";

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (cells[index(col, row)] === 1) {
            context.fillRect(col * settings.cellSize, row * settings.cellSize, settings.cellSize, settings.cellSize);
          }
        }
      }
    }

    function drawParticles(particles: Array<FallingParticle | ReformingParticle>) {
      context.fillStyle = "rgb(255, 216, 121)";

      for (const particle of particles) {
        context.fillRect(particle.x, particle.y, settings.cellSize, settings.cellSize);
      }
    }

    function draw() {
      context.clearRect(0, 0, width, height);
      drawHiddenText();
      drawCells(fixedCoding);
      drawParticles(falling);
      drawCells(pile);
      drawParticles(reforming);
    }

    const tick = (now: number) => {
      if (!isRunning) return;

      const dt = Math.min((now - lastTime) / 1000, 0.033);
      lastTime = now;

      updatePhase(dt);
      updateFalling(dt);

      if (phase !== "reform" && phase !== "hiddenHold" && phase !== "hiddenFade") {
        for (let i = 0; i < settings.settleStepsPerFrame; i++) {
          settlePile();
        }
      }

      draw();
      animationId = requestAnimationFrame(tick);
    };

    const startAnimation = () => {
      if (reduceMotion || isRunning) return;
      isRunning = true;
      lastTime = performance.now();
      animationId = requestAnimationFrame(tick);
    };

    const stopAnimation = () => {
      if (!isRunning) return;
      isRunning = false;
      cancelAnimationFrame(animationId);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);
    resize();

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { rootMargin: "160px" }
    );

    intersectionObserver.observe(parent);

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(32,36,43,0.88),rgba(15,17,21,0.96)_72%)]">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_50%_20%,rgba(245,158,11,0.16),transparent_55%)] blur-2xl" />
      <canvas
        ref={canvasRef}
        aria-label="Animated Coding sand text"
        className="absolute inset-0 block h-full w-full opacity-[0.74] mix-blend-screen [filter:drop-shadow(0_0_18px_rgba(245,158,11,0.22))] sm:opacity-[0.66] lg:opacity-[0.58]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(45,212,191,0.10),transparent_34%),linear-gradient(90deg,rgba(5,7,20,0.84),rgba(5,7,20,0.36)_38%,rgba(5,7,20,0.46)_64%,rgba(5,7,20,0.86)),linear-gradient(180deg,rgba(5,7,20,0.08),rgba(5,7,20,0.46)_55%,rgba(5,7,20,0.96))]" />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
    </div>
  );
}
