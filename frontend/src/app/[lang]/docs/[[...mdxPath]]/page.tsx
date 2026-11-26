import { redirect } from "next/navigation";
import { generateStaticParamsFor, importPage } from "nextra/pages";

import {
  isSupportedDocsLang,
  resolveDocsLang,
} from "@/components/docs/localized-links";

import { useMDXComponents as getMDXComponents } from "../../../../mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

function unsupportedDocsRedirect(lang: string, mdxPath: string[] | undefined) {
  const suffix = mdxPath?.length
    ? `/${mdxPath.map(encodeURIComponent).join("/")}`
    : "";
  redirect(`/${resolveDocsLang(lang)}/docs${suffix}`);
}

export async function generateMetadata(props) {
  const params = await props.params;
  if (!isSupportedDocsLang(params.lang)) {
    unsupportedDocsRedirect(params.lang, params.mdxPath);
  }
  const { metadata } = await importPage(params.mdxPath, params.lang);
  return metadata;
}

// eslint-disable-next-line @typescript-eslint/unbound-method
const Wrapper = getMDXComponents().wrapper;

export default async function Page(props) {
  const params = await props.params;
  if (!isSupportedDocsLang(params.lang)) {
    unsupportedDocsRedirect(params.lang, params.mdxPath);
  }
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath, params.lang);
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
