import React from "react";
class TodoItem extends React.Component {
  render() {
    const { content, edit, del } = this.props;
    return (
      <li
        className="list-group-item text-capitalize d-flex justify-content-between my-2"
        style={{ border: "1px solid #ddd", borderRadius: "5px" }}
      >
        <h6>{content}</h6>
        <div className="todo-icon">
          <span
            className="mx-2 text-success"
            onClick={edit}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-pen"></i>
          </span>
          <span
            className="mx-2 text-danger"
            onClick={del}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
export default TodoItem;
