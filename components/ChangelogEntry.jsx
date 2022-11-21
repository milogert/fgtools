const ChangelogEntry = ({ title, children }) => {
  return <div className="flex flex-row p-2 even:bg-gray-200">
    <h4 className="text-xl mr-4">{title}</h4>
    <div>{children}</div>
  </div>
}

export default ChangelogEntry
