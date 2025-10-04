import { types } from "react-bricks/rsc";
import MyHeroUnit from "./MyHeroUnit"; // Brick tùy chỉnh của bạn
import Banner from "./Banner";

const bricks: types.Theme[] = [
  {
    themeName: "My Bricks",
    categories: [
      {
        categoryName: "Custom",
        bricks: [MyHeroUnit, Banner], // Chỉ sử dụng brick này để bắt đầu
      },
    ],
  },
];

export default bricks;
