import '../styles/base.scss'

import { ExpansionProvider } from '../context/expansions'
import ExpansionConfigDialog, {
  showDialog
} from '../components/dialogs/ExpansionConfigDialog'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

const HEADER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/wizard-sheet', label: 'Wizard Sheet' },
  { href: '/spell-cards', label: 'Spell Cards' },
]

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }) => {
  const router = useRouter()

  const linkClassName = href =>
    classNames('underline text-blue-500', {
      'font-bold': router.pathname === href,
    })

  return <ExpansionProvider>
    <div>
      <nav className="print:hidden flex items-center">
        <h1 className="text-4xl my-4">Frostgrave Tools</h1>
        <div className="flex justify-between items-center flex-grow">
          <ol className="mx-4 flex items-center">
            {HEADER_LINKS.map(({ href, label }) =>
              <li key={label} className="mr-2 last:mr-0">
                <Link href={href}>
                  <a
                    className={linkClassName(href)}
                  >{label}</a>
                </Link>
              </li>
            )}
          </ol>
          <div className="flex items-center">
            <button
              onClick={showDialog}
              type="button"
              className="mr-2 border-2 border-black border-solid rounded-md p-1 bg-gray-200 h-10"
            >Expansions</button>
            <div>
              Find a bug?&nbsp;
              <a
                className="underline text-blue-500"
                href="https://github.com/milogert/frostgrave-sheet/issues/new"
                target="_blank"
                rel="noreferrer"
              >File it here!</a>
            </div>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />

      <ExpansionConfigDialog />
    </div>
  </ExpansionProvider>
}


export default App
