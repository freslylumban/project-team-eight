import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myTodos: [],
      taskTyping: "",
      descTyping: "",
      checkedTF: false
    }
  }

  async componentDidMount() {
    const getDataTodos = await axios({
      method: "get",
      url: "https://gatim8.herokuapp.com/api/tasks",
      headers: {
        "Content-Type": "application/json"
      }
    })
    this.setState({
      myTodos: getDataTodos.data
    })
  }
  
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeChecked = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(`TEST CHECKED`)
  }

  onButtonPost = async e => {
    const taskButtonPost = await axios({
      method: "post",
      url: "https://gatim8.herokuapp.com/api/tasks",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        task: this.state.taskTyping,
        description: this.state.descTyping
      }
    })
    this.setState({
      myTodos: [...this.state.myTodos, taskButtonPost.data]
    })
    this.setState({
      taskTyping: "",
      descTyping: "",
    })
  }

  onButtonDelete = async id => {
    await axios({
      method: "delete",
      url: `https://gatim8.herokuapp.com/api/tasks/${id}`,
      headers: {
        "Content-Type": "application/json"
      }
    })
    this.setState({
      myTodos: this.state.myTodos.filter(myTodo => myTodo._id !== id)
    })
  }

  render() {
    // console.log(this.state.myTodos)
    const taskReminder = this.state.myTodos.map(myTodo => {
      return (
        <div className="task-box" key={myTodo._id}>
          <input type="checkbox" name="checkedTF" checked={myTodo.status} onChange={this.onChangeChecked} />
          {/* checked={myTodo.status} */}
          <h5>
            {myTodo.task}
          </h5>
          <p>
            {myTodo.description}
          </p>
          <div className="button">
            <button className="edit">
              Edit
            </button>
            <button className="delete" onClick={() => this.onButtonDelete(myTodo._id)}>
              Delete
            </button>
          </div>
        </div>
      )
    })
    return (
      <div>
        <section className="top-todo">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 sideleft">
                <h3 className="logo">
                  GA8
                </h3>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 sideright">
                <div className="profile">
                  <ul>
                    <li>Fresly</li>
                    <li>|</li>
                    <li>Arya</li>
                    <li>|</li>
                    <li>Ardi</li>
                    <li>|</li>
                  </ul>
                  <Link to="/">
                    <button className="logout">
                      Logout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="body-content-todo">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 sideleft">
                <div className="textbox-todo">
                  <div className="title">
                    <h6>
                      What's your task?
                    </h6>
                  </div>
                  <div className="input-todo">
                    <input type="text" name="taskTyping" value={this.state.taskTyping} onChange={this.onChange} placeholder="I want to do..." />
                  </div>
                  <div className="subtitle">
                    <h6>
                      Description:
                    </h6>
                  </div>
                  <div className="textarea-desc">
                    <textarea name="descTyping" value={this.state.descTyping} onChange={this.onChange} placeholder="Task describe to do ..." />
                  </div>
                  <div className="button-push">
                    <button onClick={this.onButtonPost}>
                      Post
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 sideright">
                {taskReminder}
              </div>
            </div>
          </div>
        </section>

        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <p className="team">
                  GA Team 8
                </p>
                <hr />
                <p className="copyright">
                  Glints Academy © 2019
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
