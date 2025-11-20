export default function LoadingPage() {
  return (
    <div className="inset-0 flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-black via-gray-900 to-black z-50 fixed">
      {/* Animated Logo Text */}
      <div className="relative mb-12">
        <svg className="w-80 h-40" viewBox="0 0 400 100">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-transparent stroke-white stroke-[2.5] text-[48px] font-bold uppercase tracking-wider animate-draw-text"
            style={{ filter: "url(#glow)" }}
          >
            Axenproperty
          </text>
        </svg>
      </div>

      {/* Loading Spinner */}
      <div className="relative w-16 h-16 mb-8">
        <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
      </div>

      {/* Loading Dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-white rounded-full animate-pulse-dot"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
