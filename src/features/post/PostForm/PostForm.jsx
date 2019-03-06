import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class PostForm extends Component {
  state = {
    post: {
      title: '',
      date: '',
      city: '',
      event: '',
      postedBy: ''
    }
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    this.props.createPost(this.state.post);
  };

  onInputChange = evt => {
    const newPost = this.state.post;
    newPost[evt.target.name] = evt.target.value;
    this.setState({
      post: newPost
    });
  };

  render() {
    const { handleCancel } = this.props;
    const { post } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Post Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={post.title}
              placeholder="Post Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={post.date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={post.city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Event</label>
            <input
              name="event"
              onChange={this.onInputChange}
              value={post.event}
              placeholder="Enter the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Posted By</label>
            <input
              name="postedBy"
              onChange={this.onInputChange}
              value={post.PostedBy}
              placeholder="Your Name"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default PostForm;
