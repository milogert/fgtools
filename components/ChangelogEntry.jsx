const ChangelogEntry = ({ title, children }) => {
  return <div className="flex flex-row p-2 even:bg-gray-200">
    <h4 className="text-xl mr-8">{title}</h4>
    <ul className="list-outside list-disc">
      {children}
    </ul>
  </div>
}

export default ChangelogEntry
