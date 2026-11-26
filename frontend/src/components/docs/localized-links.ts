export const SUPPORTED_DOC_LANGUAGES = ["en", "zh"] as const;
export type DocsLang = (typeof SUPPORTED_DOC_LANGUAGES)[number];

const SUPPORTED_DOC_LANGUAGE_SET = new Set<string>(SUPPORTED_DOC_LANGUAGES);
const UNLOCALIZED_DOCS_PATH = /^\/docs(?=\/|[?#]|$)/;
const DEFAULT_DOCS_LANG: DocsLang = "en";

export function isSupportedDocsLang(
  lang: string | undefined,
): lang is DocsLang {
  return !!lang && SUPPORTED_DOC_LANGUAGE_SET.has(lang);
}

/** Docs MDX exists only for en/zh; UI locales like vi fall back to English. */
export function resolveDocsLang(lang: string | undefined): DocsLang {
  return isSupportedDocsLang(lang) ? lang : DEFAULT_DOCS_LANG;
}

export function localizeDocsHref(
  href: string,
  lang: string | undefined,
): string {
  if (!isSupportedDocsLang(lang)) {
    return href;
  }
  if (!UNLOCALIZED_DOCS_PATH.test(href)) {
    return href;
  }
  return `/${lang}${href}`;
}
