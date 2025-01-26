"use client"
import React, { useRef, useEffect, useState } from "react";

const GradientWaveAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvasState] = useState<HTMLCanvasElement>();
  const [ctx, setCtxState] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    const _canvas = canvasRef.current;
    if (!_canvas) return;
    else setCanvasState(_canvas)

    const _ctx = _canvas.getContext("2d");
    if (!_ctx) return;
    else setCtxState(_ctx)

  }, []);

  useEffect(() => {

    // Wave parameters
    const phase_0 = 0;
    const waveHeight_0 = 200; // Height of the wave
    const waveFrequency_0 = 0.015; // Frequency of the waves
    const waveSpeed_0 = 0.02; // Speed of wave animation

    const createGradientBackground = () => {
      const gradient = ctx?.createLinearGradient(10, 10, 0, canvas?.height!);
      gradient?.addColorStop(0, "#212121"); // Light gray
      gradient?.addColorStop(0.2, "#464647"); // Medium gray
      gradient?.addColorStop(0.4, "#7c7d7e"); // Medium gray
      gradient?.addColorStop(0.6, "#fafafa"); // Black
      gradient?.addColorStop(1, "transparent"); // Black
      return gradient;
    };

    // Draw the wave with background
    const drawWave = (waveHeight: number, waveFrequency: number, phase: number) => {
      if (ctx && canvas) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create the wave
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x <= canvas.width; x++) {
          const y =
            canvas.height / 2 +
            waveHeight * Math.sin((x * waveFrequency) + phase) * Math.cos(x * 0.002 + phase);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = createGradientBackground()!; // Slight white tint for the wave
        ctx.fill();
      }
    };
    // Animation loop
    const animate = (waveSpeed: number, waveHeight: number, waveFrequency: number, phase: number) => {
      phase += waveSpeed;
      drawWave(waveHeight, waveFrequency, phase);
      requestAnimationFrame(() => animate(waveSpeed, waveHeight, waveFrequency, phase));
    };
    if (ctx && canvas) {
      animate(waveSpeed_0, waveHeight_0, waveFrequency_0, phase_0);
    }
  }, [ctx, canvas])


  return <canvas ref={canvasRef} id="gradient-canvas"
    data-js-darken-top="true"
    data-transition-in="true"
    width="983"
    height="230"
    className="mx-auto max-w-full" />;
};

export default GradientWaveAnimation;