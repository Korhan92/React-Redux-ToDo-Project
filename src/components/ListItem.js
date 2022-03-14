import React from "react";
import { editTodo, deleteTodo } from "../action/UpdateList";
import {connect} from "react-redux"

class ListItem extends React.Component {
  state ={editValue:""}
  render() {
    console.log(this.props)
    
    return (
      <div className="list-group-item list-group-item-action d-flex justify-content-between">
        
        
        <span  contentEditable={true} onInput={(e)=> this.setState({
          editValue:e.target.innerText
        })} >
           {this.props.items}
        </span>
        <div className="btn-group btn-group-sm" role="group">
          <button onClick={()=>this.props.editTodo(this.state.editValue,this.props.index)} className="btn btn-primary" type="button">
            Update
          </button>
          <button onClick={()=>this.props.deleteTodo(this.state.editValue,this.props.index)} className="btn btn-primary" type="button">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { return {messages:state} };

const mapDispatchToProps = { editTodo, deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
