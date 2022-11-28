const todos = [
  { name: 'Save expansion state to storage.', done: false },
]

const Todos = () =>
  todos.map(({ name, done, completed }, idx) =>
    <label key={name} htmlFor={`todo-${idx}`}>
      <input id={`todo-${idx}`} type="checkbox" disabled checked={done} className="mr-2" />
      <span className={done ? 'line-through text-gray-400' : ''}>{name}</span>
      {completed && <span className="ml-2">Completed on {completed} 🎉</span>}
    </label>
  )

export default Todos
