import classnames from 'classnames'

const Box = ({ children, className, thickBorders }) =>
  <div className={classnames(
    'box flex flex-col border-black p-1',
    className,
    { 'border': !thickBorders, 'border-2': thickBorders }
  )}>
    {children}
  </div>

export default Box
