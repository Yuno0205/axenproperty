export default function LoadingPage() {
  return (
    <div className="inset-0 flex items-center justify-center w-screen h-screen bg-black z-50 fixed">
      <svg className="w-64 h-32" viewBox="0 0 300 100">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className="fill-transparent stroke-white stroke-2 text-[40px] font-bold uppercase"
        >
          Axenproperty
        </text>
        <style>
          {`
            text {
              stroke-dasharray: 300;
              stroke-dashoffset: 300;
              animation: strokeAnim 2s linear forwards;
            }
            @keyframes strokeAnim {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}
        </style>
      </svg>
    </div>
  );
}
