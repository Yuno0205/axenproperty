import { types } from "react-bricks/frontend";

const config = {
  appId: "51eb3cec-8b21-41db-86e0-66cdbc0135a4", // App ID từ dashboard
  apiKey: "51eb3cec-8b21-41db-86e0-66cdbc0135a4", // API Key từ dashboard

  // Danh sách các bricks (components có thể edit)
  bricks: [
    // Sẽ add các bricks vào đây sau
  ],

  // Định nghĩa các loại trang
  pageTypes: [
    {
      name: "page",
      pluralName: "pages",
      defaultLocked: false,
      defaultStatus: types.PageStatus.Published,
      getDefaultContent: () => [],
    },
  ],

  // Logo cho admin panel (optional)
  logo: "/logo.png",

  // Content classes cho styling (optional)
  contentClassName: "content",

  // Custom fields có thể thêm vào từng page (optional)
  pageTypeFields: [
    {
      name: "title",
      type: types.SideEditPropType.Text,
      label: "Meta Title",
    },
    {
      name: "description",
      type: types.SideEditPropType.Textarea,
      label: "Meta Description",
    },
  ],
};

export default config;
