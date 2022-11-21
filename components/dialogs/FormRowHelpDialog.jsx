export const ID = 'form-row-help-dialog'

const buildId = id => `${ID}-${id}`

export const showDialog = id => {
  document.getElementById(buildId(id)).showModal()
}

const closeDialog = id => {
  document.getElementById(buildId(id)).close()
}

const FormRowHelpDialog = ({ help, id, label }) => {
  return <dialog
    id={buildId(id)}
    className="max-w-xs md:max-w-lg print:hidden border-2 border-solid border-black rounded-md"
    // style={{ maxWidth: '50%' }}
  >
    <div className="flex justify-between items-center">
      <h2 className="text-3xl mr-10">Help: {label}</h2>
      <button
        className="border-2 border-black border-solid rounded-md p-1 bg-gray-200"
        type="reset"
        onClick={() => closeDialog(id)}
      >Close</button>
    </div>

    {help}
  </dialog>
}

export default FormRowHelpDialog
