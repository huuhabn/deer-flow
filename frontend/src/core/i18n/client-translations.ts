import type { Locale } from "./locale";
import { enUS } from "./locales/en-US";
import type { Translations } from "./locales/types";
import { viVN } from "./locales/vi-VN";
import { zhCN } from "./locales/zh-CN";

// Translation dictionaries contain formatter functions, so they must be
// selected inside a Client Component rather than serialized through an RSC
// boundary.
export const clientTranslations: Record<Locale, Translations> = {
  "en-US": enUS,
  "zh-CN": zhCN,
  "vi-VN": viVN,
};
