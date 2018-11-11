import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
    
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addMessage(this.state.input)
    this.setState({input: ""})
  }

  handleEdit = (bool, index) => {
    this.props.editMessage(bool, index)
  }

  handleDelete = (index) => {
    this.props.deleteMessage(index)
  }

  handleUpdate = (e, index) => {
    this.props.updateMessage(e.target.value, index)
  }

  render() {
    return (
      <div className="App-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.input} placeholder="Enter a message" required/>
          <button type="submit">Submit</button><br/>
        </form>
        
        <h3>Messages ({this.props.number})</h3>
      
        <ul>
          {
            this.props.messages.map((message, index) => (
              <li key={index}>
                {
                  message.edit ? (<span><input onChange={(e) => this.handleUpdate(e, index)} value={message.text}/><button onClick={() => this.handleEdit(false, index)}>Update</button></span>) : 
                  (
                    <span>
                      {message.text} <button onClick={()=> { this.handleEdit(true, index) }}>Edit</button> <button onClick={ () => this.handleDelete(index) }>Delete</button>
                    </span>
                  )
                }
              </li>
            ))
          }
        </ul>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  number: state.number
});

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => dispatch(actions.addMessage(message)),
        deleteMessage: (index) => dispatch(actions.deleteMessage(index)),
        editMessage: (bool, index) => dispatch(actions.editMessage(bool, index)),
        updateMessage: (message, index) => dispatch(actions.updateMessage(message, index))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
