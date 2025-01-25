"use client"
import React, { useRef, useEffect } from "react";

const GradientWaveAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;


    // Wave parameters
    let phase = 0;
    const waveHeight = 200; // Height of the wave
    const waveFrequency = 0.01; // Frequency of the waves
    const waveSpeed = 0.03; // Speed of wave animation

    // Gradient background
    const createGradientBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#212121");
      gradient.addColorStop(0.3, "#464647");
      gradient.addColorStop(0.6, "#7c7d7e");
      gradient.addColorStop(1, "#fafafa");
      return gradient;
    };

    // Draw the wave with background
    const drawWave = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fill background with gradient
      ctx.fillStyle = createGradientBackground();
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; // Slight white tint for the wave
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      phase += waveSpeed;
      drawWave();
      requestAnimationFrame(animate);
    };

    animate();


  }, []);

  return <canvas ref={canvasRef} id="gradient-canvas"
    data-js-darken-top="true"
    data-transition-in="true"
    width="983"
    height="230"
    className="mx-auto max-w-full" />;
};

export default GradientWaveAnimation;