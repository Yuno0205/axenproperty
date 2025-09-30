import { Text, RichText, Image, types } from "react-bricks/frontend";
import React from "react";

const Banner: types.Brick = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      {/* Sử dụng component Image của React Bricks cho hình nền */}
      <Image
        propName="backgroundImage"
        alt="Banner"
        imageClassName="absolute inset-0 -z-10 h-full w-full object-cover"
        // Cung cấp một ảnh mặc định
        source={{
          src: "/static/images/new/banner.jpg",
          placeholderSrc: "/static/images/new/banner.jpg",
          width: 1920,
          height: 1080,
        }}
      />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          {/* Sử dụng Text cho tiêu đề có thể chỉnh sửa */}
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
          {/* Sử dụng RichText cho mô tả có thể chỉnh sửa */}
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

// Bước quan trọng: Thêm schema
Banner.schema = {
  name: "banner",
  label: "Banner",
  getDefaultProps: () => ({
    title: "Nền tảng bất động sản thế hệ mới",
    description:
      "Chúng tôi giúp bạn tìm kiếm, mua bán và đầu tư bất động sản một cách dễ dàng và hiệu quả.",
  }),
};

export default Banner;
