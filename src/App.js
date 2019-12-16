import React ,{Component}from 'react';


import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
   
  }


add=()=>{
  //text,und
  let text=this.props.changeText
this.props.ADD_TODO(text,"text-normal")
}

  render() { 
console.log( "text"+this.props.changeText)
    return ( 
<section>

      <input type="text"  onChange={(e)=>{this.props.CHANGE_TXT(e)}} ></input>
      <span onClick={this.add}>Add</span>
      <div>   { /*List */}
          {this.props.listTodo.map((el, i) => {
            return (
              <p key={i}>
                <span>{el.text}</span>
                <span onClick={() => this.delete(el.id)}>delete</span>
              </p>)
          })}
        </div>

        </section>
     );
  }
}
  const mapDispatchToProps = (dispatch) => {
   return {
    ADD_TODO:(text,undo)=>{
       dispatch({type:'add-todo',text:text,undo:undo})
     },

     CHANGE_TXT:(e)=>{
      dispatch({type:'CHANGE_TXT',value:e.target.value})
    },
   }
 }
 const mapStateToProps = ({listtodoreducers,changeText}) => {
  return {
    listTodo:listtodoreducers,
    changeText:changeText
    }
  }

 export default connect(mapStateToProps,mapDispatchToProps)(App)