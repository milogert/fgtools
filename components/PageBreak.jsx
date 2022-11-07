const PageBreak = () =>
  <div className="print:break-before-page">
    <div className="print:hidden print:h-0 print:w-0 my-1 bg-gray-300 text-center text-2xl p-3">
      New page starts here (this will not be printed)
    </div>
  </div>

export default PageBreak
