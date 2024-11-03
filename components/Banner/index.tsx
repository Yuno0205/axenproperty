export const Banner = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full h-full">
        <div
          style={{
            backgroundImage: "url('/static/images/jw_istanbul_marmara.jpg')",
            backgroundPosition: "1.9% 95.94%",
            backgroundSize: "cover", // Tùy chọn
          }}
          className="w-full h-[450px] relative"
        >
          <span className="absolute text-white bottom-14 left-5 py-2.5 text-sm">
            JW Marriott® Istanbul Marmara Sea{" "}
          </span>
          <span className="avenir text-white absolute bottom-32 left-5 text-5xl">
            STAY IN THE MOMENT
          </span>
          <div className="px-5">22</div>
        </div>
      </div>
    </section>
  );
};
