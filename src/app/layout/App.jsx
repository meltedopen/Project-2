import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PostDashboard from '../../features/post/PostDashboard/PostDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <PostDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
