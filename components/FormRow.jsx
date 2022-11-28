import FormRowHelpDialog, { showDialog } from './dialogs/FormRowHelpDialog'

const FormRow = ({
  className,
  help,
  inputProps,
  label,
  name,
  sublabel,
}) =>
  <div className={`form-row flex justify-between items-center h-9  ${className || ''}`}>
    <label htmlFor={name} className="flex flex-grow" aria-hidden="true">
      {label}
      {sublabel && (
        <span className="text-gray-500 font-medium text-sm ml-2 align-bottom mt-1 h-5">{sublabel}</span>
      )}
      {help && (
        <button
          className="ml-2 py-1 px-2 text-xs leading-none border-black border-2 rounded-full"
          onClick={() => showDialog(name)}
        >
          ℹ
        </button>
      )}
      <div className="form-spacer flex-grow mx-3 border-b-2 border-dotted border-black" />
    </label>
    <input id={name} {...inputProps} />
    {help && <FormRowHelpDialog help={help} label={label} id={name} />}
  </div>

export default FormRow
