import { Text, RichText, Image, types } from "react-bricks/rsc";
import React from "react";
import classNames from "classnames";

// Định nghĩa các loại props mới
interface BannerProps {
  padding: "small" | "medium" | "large";
  title: types.TextValue;
  description: types.TextValue;
  backgroundImage: types.IImageSource;
}

// Hàm trợ giúp để chuyển đổi giá trị padding thành lớp CSS
const getPadding = (padding: "small" | "medium" | "large") => {
  switch (padding) {
    case "small":
      return "py-20 sm:py-28 lg:py-32";
    case "medium":
      return "py-32 sm:py-48 lg:py-56";
    case "large":
      return "py-40 sm:py-56 lg:py-64";
  }
};

const Banner: types.Brick<BannerProps> = ({
  padding,
  backgroundImage,
  title,
  description,
}) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <Image
        propName="backgroundImage"
        alt="Banner"
        imageClassName="absolute inset-0 -z-10 h-full w-full object-cover"
        source={backgroundImage}
      />
      {/* Sử dụng hàm getPadding để áp dụng lớp CSS động */}
      <div className={classNames("mx-auto max-w-2xl", getPadding(padding))}>
        <div className="text-center">
          <Text
            propName="title"
            renderBlock={(props) => (
              <h1
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                {...props}
              >
                {props.children}
              </h1>
            )}
            placeholder="Nhập tiêu đề..."
          />
          <RichText
            propName="description"
            renderBlock={(props) => (
              <p className="mt-6 text-lg leading-8 text-gray-300" {...props}>
                {props.children}
              </p>
            )}
            placeholder="Nhập mô tả..."
          />
        </div>
      </div>
    </div>
  );
};

Banner.schema = {
  name: "banner",
  label: "Banner",
  getDefaultProps: () => ({
    padding: "medium", // Giá trị mặc định
    title: "Nền tảng bất động sản thế hệ mới",
    description:
      "Chúng tôi giúp bạn tìm kiếm, mua bán và đầu tư bất động sản một cách dễ dàng và hiệu quả.",
    backgroundImage: {
      src: "/static/images/new/banner.jpg",
      placeholderSrc: "/static/images/new/banner.jpg",
      width: 1920,
      height: 1080,
    },
  }),
  // Thêm điều khiển vào thanh bên
  sideEditProps: [
    {
      name: "padding",
      label: "Chiều cao (Padding)",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: "small", label: "Nhỏ" },
          { value: "medium", label: "Vừa" },
          { value: "large", label: "Lớn" },
        ],
      },
    },
  ],
};

export default Banner;
