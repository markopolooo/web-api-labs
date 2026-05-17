const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
            <label>
        Task title:
        <input type="text" name="title" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Due date:
        <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Details:
        <input type="text" name="description" onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Priority:
        <select name="priority" onChange={(event) => props.change(event)}>
          <option value="">Select priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
    </label>
    <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;
