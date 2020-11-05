import React from "react";

class Input extends React.Component {
  state = {
    title: "",
    deadline: "",
    isCompleted: false
  };
  componentDidMount = () => {
    console.log("Input CDM", this.props);
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log("Input CDU", this.props.prevProps);
    if (prevProps.editTodoData !== this.props.editTodoData) {
      this.setState({
        title: this.props.editTodoData.title,
        deadline: this.props.editTodoData.deadline,
        isCompleted: this.props.editTodoData.isCompleted
      });
    }
  };
  handleInputChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };
  handleDeadlineChange = (e) => {
    this.setState({
      deadline: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.handleInputChange(e)}
          value={this.state.title}
          type="text"
          placeholder="Title"
        />
        <input
          onChange={(e) => this.handleDeadlineChange(e)}
          value={this.state.deadline}
          type="date"
        />
        {!this.props.isEdit && (
          <button onClick={() => this.props.sendTodoFromInput(this.state)}>
            SAVE
          </button>
        )}
        {this.props.isEdit && (
          <button onClick={() => this.props.sendTodoFromInput(this.state)}>
            Edit
          </button>
        )}
      </div>
    );
  }
}

export default Input;
