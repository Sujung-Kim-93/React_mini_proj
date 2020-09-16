import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    writingItem: "", // words written in todo input
    items: [],
    id: uuid(),
    editItem: false,
  };

  // handle changes in todo input
  handleChange = (event) => {
    const val = event.target.value;
    this.setState(() => {
      return { writingItem: val };
    });
  };

  // handle submit : add, edit
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.editItem) {
      // add
      this.setState(({ items }) => {
        const updatedItems = [
          ...items,
          { id: this.state.id, title: this.state.writingItem },
        ];
        return { items: updatedItems, writingItem: "", id: uuid() };
      });
    } else {
      // edit
      this.setState(({ items }) => {
        const edited = items.find((item) => {
          return item.id === this.state.id;
        });
        edited.title = this.state.writingItem;
        return {
          items: items,
          writingItem: "",
          editItem: false,
          id: uuid(),
        };
      });
    }
  };

  // put list item to todo input and setup edit function
  handleEdit = (id) => {
    const edited = this.state.items.find((item) => item.id === id);
    this.setState(() => {
      return {
        writingItem: edited.title,
        editItem: true,
        id: id,
      };
    });
  };

  // delete items
  handleDelete = (id) => {
    this.setState(({ items }) => {
      items = items.filter((item) => {
        return item.id !== id;
      });
      return { items };
    });
  };

  // clear the todo list
  handleClear = () => {
    this.setState(({ items }) => {
      items.length = 0;
      return { items };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput
                content={this.state.writingItem}
                editItem={this.state.editItem}
                change={this.handleChange}
                submit={this.handleSubmit}
              />
              <TodoList
                items={this.state.items}
                edit={this.handleEdit}
                del={this.handleDelete}
                clear={this.handleClear}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
