const PrintWarning = ({ what }) =>
  <div className="text-3xl text-center border-black border-b-4 mt-4">
    <div>Everything above this line will not be printed.</div>
    <div>Below is a preview of your {what}.</div>
  </div>

export default PrintWarning
