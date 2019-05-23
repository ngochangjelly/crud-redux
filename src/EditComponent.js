import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNewTitle: '',
      currentNewMessage: '',
    };
  }
  handleCurrentNewTitleChange = e => {
    this.setState({
      currentNewTitle: e.target.value,
    });
  };
  handleCurrentNewMessageChange = e => {
    this.setState({
      currentNewMessage: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage,
    };
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data });
    this.props.handleEditingChange(e);
  };
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            onChange={e => this.handleCurrentNewTitleChange(e)}
            defaultValue={this.props.post.title}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            onChange={e => this.handleCurrentNewMessageChange(e)}
            ref={input => (this.getMessage = input)}
            defaultValue={this.props.post.message}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
