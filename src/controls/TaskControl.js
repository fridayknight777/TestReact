
function TaskControl({todo, removeTask}) {
  return (
    <div key={todo.id}>
    <input className="TextBorder" type="text" id="fname" name="fname"/>
    <button onClick={() => removeTask(todo.id)}>X</button>
    </div>
  );
}

export default TaskControl;
