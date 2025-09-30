import { types } from "react-bricks/rsc";

const pageTypes: types.IPageType[] = [
  {
    name: "page",
    pluralName: "pages",
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
  // Chúng ta sẽ thêm loại 'layout' cho Header/Footer ở các bước sau.
];

export default pageTypes;
