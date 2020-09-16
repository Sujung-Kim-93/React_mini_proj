import React from "react";
import TodoItem from "./TodoItem";
class TodoList extends React.Component {
  render() {
    const { items, edit, del, clear } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        {items.length === 0 ? (
          <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>Add some items :)</h6>
          </li>
        ) : (
          items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                content={item.title}
                edit={() => {
                  edit(item.id);
                }}
                del={() => {
                  del(item.id);
                }}
              />
            );
          })
        )}
        <button
          type="button"
          onClick={clear}
          className="btn btn-danger btn-block text-uppercase mt-5"
        >
          clear list
        </button>
      </ul>
    );
  }
}
export default TodoList;
