export const Banner = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full h-full">
        <div
          style={{
            backgroundImage: "url('/static/images/new/tower.jpg')",
            backgroundPosition: "50% 20%",
          }}
          className="w-full h-[550px] relative bg-cover bg-no-repeat"
        >
          <div className="avenir text-white absolute bottom-12 left-52 text-5xl flex flex-col font-light">
            <span>Delivering professional</span>
            <span> Real estate solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};
