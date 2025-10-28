import { types } from "react-bricks/rsc";
import bricks from "./bricks";
import pageTypes from "./pageTypes";
import NextLink from "./NextLink";

const config: types.ReactBricksConfig = {
  // Thay thế bằng App ID và API Key của bạn
  appId: process.env.NEXT_PUBLIC_APP_ID || "",
  apiKey: process.env.API_KEY || "",

  bricks,
  pageTypes,
  renderLocalLink: NextLink,
  navigate: (path: string) => {
    if (typeof window !== "undefined") {
      window.location.assign(path);
    }
  },
  appRootElement: "body",

  // Các đường dẫn cơ bản cho admin panel
  loginPath: "/admin",
  editorPath: "/admin/editor",
  mediaLibraryPath: "/admin/media",
  previewPath: "/preview",
};

export default config;
