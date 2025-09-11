export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-6">
          <div className="w-12 h-12 mx-auto mb-3 bg-black rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-black">AxenProperty</h2>
        </div>

        {/* Simple spinner */}
        <div className="w-8 h-8 mx-auto border-2 border-gray-200 border-t-black rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
