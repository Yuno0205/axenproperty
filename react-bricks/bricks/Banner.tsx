import { Text, RichText, Image, types } from "react-bricks/rsc";
import React from "react";

// Định nghĩa interface cho props để đảm bảo an toàn kiểu dữ liệu
interface BannerProps {
  backgroundImage: types.IImageSource;
  title: types.TextValue;
  description: types.TextValue;
}

const Banner: types.Brick<BannerProps> = ({
  backgroundImage,
  title,
  description,
}) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      {/* Sử dụng component Image của React Bricks cho hình nền.
        Nội dung sẽ được quản lý qua sideEditProps.
      */}
      <Image
        propName="backgroundImage"
        source={backgroundImage}
        alt="Banner"
        imageClassName="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          {/* Sử dụng Text cho tiêu đề có thể chỉnh sửa trực tiếp */}
          <Text
            propName="title"
            value={title}
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
          {/* Sử dụng RichText cho mô tả có thể chỉnh sửa trực tiếp */}
          <RichText
            propName="description"
            value={description}
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

// Schema để định nghĩa cách "viên gạch" này hoạt động trong trình chỉnh sửa
Banner.schema = {
  name: "banner", // Tên định danh duy nhất
  label: "Banner", // Tên hiển thị trong trình chỉnh sửa
  getDefaultProps: () => ({
    title: "Nền tảng bất động sản thế hệ mới",
    description:
      "Chúng tôi giúp bạn tìm kiếm, mua bán và đầu tư bất động sản một cách dễ dàng và hiệu quả.",
    backgroundImage: {
      // Ảnh mặc định
      src: "/static/images/new/banner.jpg",
      placeholderSrc: "/static/images/new/banner.jpg",
      width: 1920,
      height: 1080,
      alt: "Banner mặc định",
    },
  }),
  // Các trường điều khiển trong thanh bên của trình chỉnh sửa
  sideEditProps: [
    {
      name: "backgroundImage",
      label: "Ảnh nền",
      type: types.SideEditPropType.Image,
    },
  ],
};

export default Banner;
