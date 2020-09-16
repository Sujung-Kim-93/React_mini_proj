import React from "react";

class TodoInput extends React.Component {
  render() {
    const { content, editItem, change, submit } = this.props;
    return (
      <div className="card card-body my-3">
        <form
          onSubmit={(e) => {
            submit(e);
          }}
        >
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-grou-text bg-primary text-white pl-3 pr-3 pt-1">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              onChange={change}
              value={content}
            />
          </div>

          <button
            type="submit"
            disabled={content ? false : true}
            className={
              !editItem
                ? "btn btn-block btn-primary mt-3 text-uppercase"
                : "btn btn-block btn-success mt-3 text-uppercase"
            }
          >
            {!editItem ? "Add Item" : "Edit Item"}
          </button>
        </form>
      </div>
    );
  }
}
export default TodoInput;
