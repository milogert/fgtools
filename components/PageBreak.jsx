
const { default: classNames } = require('classnames')
const cls = require('../styles/pageBreak.module.scss')
const clsUtils = require('../styles/utils.module.scss')

const PageBreak = () =>
  <div className="pagebreak">
    <div className={classNames([ cls.pageBreak, clsUtils.noPrint ])}>New page starts here</div>
  </div>

module.exports = PageBreak
