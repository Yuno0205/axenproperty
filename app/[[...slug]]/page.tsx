import type { Metadata } from "next";
import {
  JsonLd,
  PageViewer,
  cleanPage,
  fetchPage,
  getBricks,
  getMetadata,
  types,
} from "react-bricks/rsc";
import { ClickToEdit } from "react-bricks/rsc/client";
import { notFound } from "next/navigation";

import config from "@/react-bricks/config";

// Hàm lấy dữ liệu trang
const getData = async (
  slug: string | undefined
): Promise<types.Page | null> => {
  const cleanSlug = slug || "home";

  const page = await fetchPage({
    slug: cleanSlug,
    language: "en",
    config,
  }).catch(() => {
    return null;
  });

  return page;
};

// Component Page chính
export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug?.join("/");
  const page = await getData(slug);

  if (!page) {
    notFound();
  }

  const bricks = getBricks();
  const pageOk = cleanPage(page, config.pageTypes || [], bricks);

  return (
    <>
      {pageOk.meta && <JsonLd page={pageOk}></JsonLd>}

      <PageViewer page={pageOk} main />

      <ClickToEdit
        pageId={pageOk.id}
        language={"en"}
        editorPath={config.editorPath || "/admin/editor"}
        clickToEditSide={config.clickToEditSide}
      />
    </>
  );
}

// Hàm generateMetadata vẫn giữ nguyên
export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}): Promise<Metadata> {
  const slug = params.slug?.join("/");
  const page = await getData(slug);

  if (!page?.meta) {
    return {};
  }

  return getMetadata(page);
}
