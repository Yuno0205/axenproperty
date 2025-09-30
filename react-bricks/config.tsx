import { types } from "react-bricks/rsc";
import bricks from "./bricks";
import pageTypes from "./pageTypes";
import { Link } from "react-bricks";

const config: types.ReactBricksConfig = {
  appId: process.env.NEXT_PUBLIC_APP_ID || "",
  apiKey: process.env.API_KEY || "",

  // Tập hợp tất cả các "viên gạch" bạn sẽ sử dụng
  bricks,

  // Tập hợp tất cả các loại trang
  pageTypes,
  renderLocalLink: (props) => <Link href={props.href}>{props.children}</Link>,
  navigate: (path: string) => {
    window.location.href = path;
  },
  appRootElement: "body",

  // Các đường dẫn cho khu vực quản trị
  loginPath: "/admin",
  editorPath: "/admin/editor",
  playgroundPath: "/admin/playground",
  appSettingsPath: "/admin/app-settings",
  previewPath: "/preview",
};

export default config;
