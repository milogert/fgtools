const PageBreak = () =>
  <div className="print:break-before-page">
    <div className="print:hidden print:h-0 print:w-0 mb-1 bg-gray-300 text-center text-2xl p-3">
      New page starts here
    </div>
  </div>

module.exports = PageBreak
