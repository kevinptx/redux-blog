import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import { Container } from "semantic-ui-react";
import Blog from "./components/Blog";

class App extends Component {
  render() {
    return (
      <Container>
        <br />
        <Fragment>
          <Switch>
            <Route exact path="/" component={BlogList} />
            <Route exact path="/bloglist" component={BlogList} />
            <Route exact path="/blogform" component={BlogForm} />
            <Route exact path="/blog/:id" component={Blog} />
          </Switch>
        </Fragment>
      </Container>
    );
  }
}

export default App;
