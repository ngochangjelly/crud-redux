import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
  constructor(props) {
    super();
    this.state = {
      currentTitle: '',
      currentMessage: '',
      isFormErr: false,
    };
  }
  handleTitleChange = event => {
    this.setState({
      currentTitle: event.target.value,
    });
  };
  handleMessageChange = event => {
    this.setState({
      currentMessage: event.target.value,
    });
  };
  handleSubmit = e => {
    if (this.state.currentMessage !== '' && this.state.currentTitle !== '') {
      e.preventDefault();
      const title = this.state.currentTitle;
      const message = this.state.currentMessage;
      const data = {
        id: new Date(),
        title,
        message,
        editing: false,
      };
      this.props.dispatch({
        type: 'ADD_POST',
        data,
      });
      this.setState({
        currentTitle: '',
        currentMessage: '',
      });
      return;
    }
    this.setState({ isFormErr: true });
  };

  render() {
    const errStyle = this.state.isFormErr ? 'error' : '';
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            value={this.state.currentTitle}
            onChange={e => this.handleTitleChange(e)}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            cols="28"
            placeholder="Enter Post"
            onChange={e => this.handleMessageChange(e)}
            value={this.state.currentMessage}
          />
          <br />
          <br />
          <button className={errStyle}>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
