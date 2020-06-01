import React ,{useState}from "react";

export default function Todo(props) {
  const [isEditing,setEditing]=useState(false);
  const editingTemplate = (
    <form className="stack-small">
      <div className="form-group" >
        <label className="todo-label" htmlFor={props.id}>
          NEw name for {props.name}
        </label>
        <input id={props.id} type="text" className="todo-text" />
      </div>
      <div className="btn-group" > 
      <button className="btn todo-cancel" type="button"
      onChange={() => setEditing(false)}
      >
        Cancel 
        <span className="visually-hidden" >renaming {props.name}</span>
      </button> 
      <button type="submit" className="btn btn__primary todo-edit" >
        Save
        <span className="visually-hidden" >new name for {props.name}</span>
      </button>
      </div>
    </form>
  );

  const viewingTemplate=(
    <div className="stack-small" >
      <div className="c-cb" >
        <input
        id={props.id}
        type="checkbox"
        completed={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label"  htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group" >
        <button className="btn" type="button"
        onChange={() => setEditing(true)}>
          Edit
          <span className="visually-hidden" > {props.name}</span>
        </button>
        <button type="button" className="btn btn__danger" 
        onChange={()=> props.deleteTask(props.id)}
        >
          Delete
          <span className="visually-hidden" >{props.name}</span>
        </button>
      </div>
    </div>
  );
  
  return (
    <li className="todo" >
      {isEditing? editingTemplate:viewingTemplate}
    </li>
    
    );
  }