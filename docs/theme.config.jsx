import { useRouter } from 'next/router'
import Logo from './components/logo'
import useLocalesMap from './components/use-locales'
import {
  tableOfContentsTitleMap,
  searchPlaceholderMap,
  languageMap,
} from './i18n/translate'

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Open UI',
      }
    }
  },
  logo: <Logo />,
  project: {
    link: 'https://github.com/open-land/ui',
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="vercel.com homepage"
            href="https://github.com/open-ss-lab/ui"
          >
            <span>Powered by</span>
            <h2 className="font-bold">Open Sources Sinergy, Lab</h2>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} The Open UI Project.
        </p>
      </div>
    ),
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
