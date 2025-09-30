import { types } from "react-bricks/rsc";
import Banner from "./Banner";

// Chúng ta sẽ import và thêm từng "viên gạch" đã chuyển đổi vào đây.
// Ví dụ: import Banner from './Banner';

const bricks: types.Theme[] = [
  {
    themeName: "Axen Property Bricks",
    categories: [
      {
        categoryName: "General",
        bricks: [Banner],
      },
    ],
  },
];

export default bricks;
