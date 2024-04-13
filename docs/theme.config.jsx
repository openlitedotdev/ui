import Logo from './components/logo'
import useLocalesMap from "./components/use-locales";
import { tableOfContentsTitleMap, searchPlaceholderMap, languageMap } from './i18n/translate';

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  logo: <Logo />,
  project: {
    link: 'https://github.com/open-land/ui',
  },
  toc: {
    float: true,
    title: () => useLocalesMap(tableOfContentsTitleMap),
  },
  search: {
    placeholder: () => useLocalesMap(searchPlaceholderMap),
  },
  i18n: Object.entries(languageMap).map(([locale, text]) => ({
    locale,
    text,
  })),  
}
