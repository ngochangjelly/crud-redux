import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
class AllPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }
  handleEditingChange = e => {
    console.log('abc');
    this.setState({
      editing: !this.state.editing,
    });
  };
  render() {
    return (
      <div>
        <h1 className="post_heading">All Posts</h1>
        {this.props.posts.map(post => (
          <div key={post.id}>
            {this.state.editing === true ? (
              <EditComponent
                post={post}
                key={post.id}
                handleEditingChange={this.handleEditingChange}
              />
            ) : (
              <Post
                post={post}
                key={post.id}
                handleEditingChange={this.handleEditingChange}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(AllPost);
