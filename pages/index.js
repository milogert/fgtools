import Head from 'next/head'
import Link from 'next/link'

import ChangelogEntry from '../components/ChangelogEntry'
import ExpansionTable from '../components/home/ExpansionTable'

const HomePage = () =>
  <div className="flex justify-center flex-col">
    <Head>
      <title>Frostgrave Tools</title>
    </Head>

    <div className="grid grid-cols-2 gap-2 mx-auto">
      <div className="relative flex justify-center items-center h-40 w-40 border border-black border-solid rounded-md hover:bg-gray-300">
        <Link href="/wizard-sheet">
          <a className="content-[''] absolute inset-0">
            <span className="h-full flex justify-center items-center">Wizard Sheet</span>
          </a>
        </Link>
      </div>
      <div className="relative flex justify-center items-center h-40 w-40 border border-black border-solid rounded-md hover:bg-gray-300">
        <Link href="/spell-cards">
          <a className="content-[''] absolute inset-0">
            <span className="h-full flex justify-center items-center">Select Spell Cards</span>
          </a>
        </Link>
      </div>
    </div>

    <div className="flex justify-between items-center">
      <h2 className="text-3xl">About</h2>
    </div>

    <h3 className="text-2xl mt-3">What is this?</h3>

    <p className="mb-2">
      This site provides out-of-game tools for&nbsp;
      <a
        href="https://ospreypublishing.com/frostgrave-second-edition"
        className="underline text-blue-500"
        target="_blank"
        rel="noreferrer"
      >Frostgrave</a>
      , a fantasy skirmish wargame by Joseph McCullough.</p>

    <h3 className="text-2xl mt-3">FAQ</h3>

    <h4 className="text-xl mt-3">My previews are not printing properly!</h4>

    <p className="mb-2">Step one, try printing in Google Chrome or Firefox. Safari has issues that I am stuck on and I semi-gave up on.</p>

    <p className="mb-2">
      Step two, if the printing still does not appear correctly then please file a bug&nbsp;
      <a
        href="https://github.com/milogert/frostgrave-sheet/issues/new"
        className="underline text-blue-500"
        target="_blank"
        rel="noreferrer"
      >here</a>
      .
    </p>

    <h4 className="text-xl mt-3">You are missing expansion X!</h4>

    <p className="mb-2">
      It&apos;s because I do not have the book or I have not played it yet. Feel free to&nbsp;
      <a
        href="https://paypal.me/milogert"
        className="underline text-blue-500"
        target="_blank"
        rel="noreferrer"
      >send me money</a>
      &nbsp;to buy the expansion. Once it arrives I&apos;ll add it and let you know!
    </p>


    <h4 className="text-lg mt-3">Owned Expansions</h4>
    <ExpansionTable />

    <h4 className="text-xl mt-3">Can you make the sheet fillable so I can print it and not have to write manually?</h4>

    <p className="mb-2">Probably not, for a variety of reasons:</p>
    <ul className="list-outside list-disc">
      <li className="ml-8">There is <i>a lot</i> more code and logic involved. My goal with this page is to keep it light.</li>
      <li className="ml-8">You frequently have to change entries for whole soldiers, so really the main thing that would be worth doing this for is the wizard school, and then you can just write it.</li>
      <li className="ml-8">I wouldn&apos;t use this feature.</li>
      <li className="ml-8">I like the pen and paper asthetic.</li>
    </ul>

    <h3 className="text-2xl mt-3">Author</h3>

    <p className="mb-2">
      This site was written by&nbsp;
      <a
        href="https://github.com/milogert"
        className="underline text-blue-500"
        target="_blank"
        rel="noreferrer"
      >Milo Gertjejansen</a>
      .
    </p>

    <p className="mb-2">
      I used NextJS and host on Vercel.
    </p>

    <h3 className="text-2xl mt-3">Changelog</h3>

    <div>
      <ChangelogEntry title="2022-11-26">
        <li>Add Thaw of the Lich Lord spells.</li>
        <li>Add an All Schools spell card selection.</li>
        <li>Fix expansion table.</li>
        <li>Wizard sheet excludes unlearnable schools.</li>
      </ChangelogEntry>

      <ChangelogEntry title="2022-11-21">
        <li>Finish spell card implementation.</li>
        <li>Re-arrange code for better organization.</li>
        <li>Add favicon.</li>
        <li>Add expansion table</li>
        <li>Finish implementing stray things.</li>
      </ChangelogEntry>

      <ChangelogEntry title="2022-11-19">
        <li>Makes slightly more mobile friendly.</li>
        <li>Sets up for school adjustment card.</li>
      </ChangelogEntry>

      <ChangelogEntry title="2022-11-06">
        <li>Adds Spell Cards.</li>
        <li>Makes expansions app-wide.</li>
      </ChangelogEntry>

      <ChangelogEntry title="2022-10-27">
        <li>Initial release</li>
      </ChangelogEntry>
    </div>
  </div>

export default HomePage
