import '../styles/base.scss'

import React, {useState} from 'react'
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

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClassName = href =>
    classNames('underline text-blue-500', {
      'font-bold': router.pathname === href,
    })

  return <ExpansionProvider>
    <div>
      <nav className="print:hidden flex md:items-center py-4 flex-col md:flex-row">
        <div className="flex justify-between items-center md:mr-4">
          <h1 className="text-4xl flex-shrink-0">❄️🪦Tools</h1>
          <button
            className="md:hidden border-2 border-black border-solid rounded-md p-1 bg-gray-200 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu {!menuOpen ? '⬇️' : '⬆️'}
          </button>
        </div>

        <div className={`${menuOpen ? 'flex' : 'hidden md:flex'} justify-between md:items-center flex-grow flex-col md:flex-row`}>
          <ol className="flex md:items-center flex-col md:flex-row">
            {HEADER_LINKS.map(({ href, label }) =>
              <li key={label} className="mr-2 last:mr-0 my-1 md:my-auto">
                <Link href={href}>
                  <a
                    onClick={() => setMenuOpen(false)}
                    className={linkClassName(href)}
                  >{label}</a>
                </Link>
              </li>
            )}
          </ol>
          <div className="flex md:items-center flex-col md:flex-row">
            <button
              onClick={showDialog}
              type="button"
              className="mr-2 border-2 border-black border-solid rounded-md p-1 bg-gray-200 h-10 max-w-fit"
            >Expansions</button>
            <div className="my-1 md:my-auto">
              <a
                className="underline text-blue-500"
                href="https://github.com/milogert/frostgrave-sheet/issues/new"
                target="_blank"
                rel="noreferrer"
              >Find a bug?</a>
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
