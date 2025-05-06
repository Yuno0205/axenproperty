"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [, setIsLoading] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Tự động chuyển trang sau 6 giây
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    // Điều khiển các bước animation
    const animationTimer = setInterval(() => {
      setAnimationStep((prev) => (prev < 5 ? prev + 1 : prev));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(animationTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo và tên công ty */}
        <div className="flex items-center mb-12">
          <h1 className="text-3xl font-bold text-black">
            <span className="font-extrabold">Axen</span>property
          </h1>
        </div>

        {/* SVG Animation ngôi nhà */}
        <div className="relative w-64 h-64 mb-8">
          <svg
            width="256"
            height="256"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
          >
            {/* Đường viền mái nhà */}
            <path
              d="M20 120L128 40L236 120"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                animationStep >= 0 ? "animate-draw-roof" : "opacity-0"
              }`}
              style={{
                strokeDasharray: 300,
                strokeDashoffset: animationStep >= 0 ? 0 : 300,
                transition: "stroke-dashoffset 1.5s ease-in-out",
              }}
            />

            {/* Đường viền thân nhà */}
            <path
              d="M40 120V200H216V120"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                animationStep >= 1 ? "animate-draw-walls" : "opacity-0"
              }`}
              style={{
                strokeDasharray: 400,
                strokeDashoffset: animationStep >= 1 ? 0 : 400,
                transition: "stroke-dashoffset 1.5s ease-in-out",
              }}
            />

            {/* Nền nhà */}
            <rect
              x="40"
              y="200"
              width="176"
              height="4"
              fill="black"
              className={`${
                animationStep >= 1 ? "animate-fade-in" : "opacity-0"
              }`}
            />

            {/* Cửa chính */}
            <rect
              x="108"
              y="140"
              width="40"
              height="60"
              className={`${
                animationStep >= 2 ? "animate-draw-door" : "opacity-0"
              }`}
              stroke="black"
              strokeWidth="4"
              fill="white"
              style={{
                strokeDasharray: 200,
                strokeDashoffset: animationStep >= 2 ? 0 : 200,
                transition: "stroke-dashoffset 1s ease-in-out",
              }}
            />

            {/* Tay nắm cửa */}
            <circle
              cx="138"
              cy="170"
              r="3"
              fill="black"
              className={`${
                animationStep >= 2 ? "animate-fade-in delay-1000" : "opacity-0"
              }`}
            />

            {/* Cửa sổ trái */}
            <rect
              x="60"
              y="140"
              width="30"
              height="30"
              stroke="black"
              strokeWidth="4"
              fill="white"
              className={`${
                animationStep >= 3 ? "animate-draw-window" : "opacity-0"
              }`}
              style={{
                strokeDasharray: 120,
                strokeDashoffset: animationStep >= 3 ? 0 : 120,
                transition: "stroke-dashoffset 0.8s ease-in-out",
              }}
            />

            {/* Cửa sổ phải */}
            <rect
              x="166"
              y="140"
              width="30"
              height="30"
              stroke="black"
              strokeWidth="4"
              fill="white"
              className={`${
                animationStep >= 3
                  ? "animate-draw-window delay-300"
                  : "opacity-0"
              }`}
              style={{
                strokeDasharray: 120,
                strokeDashoffset: animationStep >= 3 ? 0 : 120,
                transition: "stroke-dashoffset 0.8s ease-in-out 0.3s",
              }}
            />

            {/* Ống khói */}
            <rect
              x="180"
              y="80"
              width="16"
              height="30"
              fill="black"
              className={`${
                animationStep >= 4
                  ? "animate-grow-chimney"
                  : "opacity-0 scale-y-0 origin-bottom"
              }`}
              style={{
                transformOrigin: "bottom",
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
              }}
            />

            {/* Khói từ ống khói */}
            {animationStep >= 4 && (
              <>
                <circle
                  cx="188"
                  cy="70"
                  r="5"
                  fill="black"
                  className="animate-smoke-1"
                />
                <circle
                  cx="193"
                  cy="60"
                  r="6"
                  fill="black"
                  className="animate-smoke-2"
                />
                <circle
                  cx="183"
                  cy="50"
                  r="7"
                  fill="black"
                  className="animate-smoke-3"
                />
                <circle
                  cx="198"
                  cy="45"
                  r="5"
                  fill="black"
                  className="animate-smoke-4"
                />
              </>
            )}

            {/* Fill mái nhà */}
            <path
              d="M20 120L128 40L236 120L20 120Z"
              fill="black"
              className={`${
                animationStep >= 5 ? "animate-fill-roof" : "opacity-0"
              }`}
              style={{
                transition: "opacity 1s ease-in-out",
                opacity: animationStep >= 5 ? 0.1 : 0,
              }}
            />

            {/* Fill thân nhà */}
            <rect
              x="40"
              y="120"
              width="176"
              height="80"
              fill="black"
              className={`${
                animationStep >= 5 ? "animate-fill-house" : "opacity-0"
              }`}
              style={{
                transition: "opacity 1s ease-in-out",
                opacity: animationStep >= 5 ? 0.05 : 0,
              }}
            />

            {/* Đường kẻ ngang mái nhà */}
            <line
              x1="40"
              y1="120"
              x2="216"
              y2="120"
              stroke="black"
              strokeWidth="4"
              className={`${
                animationStep >= 1 ? "animate-fade-in" : "opacity-0"
              }`}
            />

            {/* Đường kẻ ngang cửa sổ */}
            <line
              x1="60"
              y1="155"
              x2="90"
              y2="155"
              stroke="black"
              strokeWidth="2"
              className={`${
                animationStep >= 3 ? "animate-fade-in delay-500" : "opacity-0"
              }`}
            />

            <line
              x1="166"
              y1="155"
              x2="196"
              y2="155"
              stroke="black"
              strokeWidth="2"
              className={`${
                animationStep >= 3 ? "animate-fade-in delay-800" : "opacity-0"
              }`}
            />

            {/* Đường kẻ dọc cửa sổ */}
            <line
              x1="75"
              y1="140"
              x2="75"
              y2="170"
              stroke="black"
              strokeWidth="2"
              className={`${
                animationStep >= 3 ? "animate-fade-in delay-500" : "opacity-0"
              }`}
            />

            <line
              x1="181"
              y1="140"
              x2="181"
              y2="170"
              stroke="black"
              strokeWidth="2"
              className={`${
                animationStep >= 3 ? "animate-fade-in delay-800" : "opacity-0"
              }`}
            />
          </svg>

          {/* Hiệu ứng đường kẻ ngang dưới nhà */}
          <div
            className={`absolute bottom-[52px] left-0 h-[2px] bg-black ${
              animationStep >= 5 ? "animate-line-grow" : "w-0"
            }`}
            style={{
              transition: "width 1.5s ease-in-out",
              width: animationStep >= 5 ? "100%" : "0%",
            }}
          ></div>
        </div>

        {/* Thông điệp */}
        <p className="text-gray-600 text-center mt-4 animate-pulse">
          Đang tải dữ liệu bất động sản...
        </p>
      </div>
    </div>
  );
}
