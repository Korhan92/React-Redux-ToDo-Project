import React from "react";
import { List, NoList } from "./List";
import { connect } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../action/UpdateList";


// React:
class App extends React.Component {
  state = { inputvalue: "" }
  onInputChange = (e) => {
    this.setState({ inputvalue: e.target.value })
  }
  render() {
   
    
    return (
      <div id="toDoApp">
        <label id="toDoTitle" htmlFor="basic-input">
          <h2 className="text-monospace">Add new things To Do:</h2>
        </label>
        <div id="toDoAdd" className="input-group">
          <input
            onChange={this.onInputChange}
            id="basic-input"
            className="form-control"
            type="text"
            placeholder="Thing to do"
          />
          <div className="input-group-append">
            <button onClick={() => this.props.addTodo(this.state.inputvalue)} className="btn btn-outline-primary">Add</button>
          </div>
        </div>
        {this.props.messages.length<1 ? <NoList /> : <List state={this.props.messages} />}


      </div>
    );
  }
}

const mapStateToProps = (state) => { return {messages:state} };

const mapDispatchToProps = { addTodo, editTodo, deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(App);
