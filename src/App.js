import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogForm from "./components/BlogForm";
import NavBar from "./components/NavBar";
import EditBlog from "./components/EditBlog";

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" />
      <Route exact path="/blog/new" component={NewBlog} />
      <Route exact path="/blog/:id" component={Blog} />
      <Route exact path="/blog/:id/edit" component={EditBlog} />
    </Switch>
  </Fragment>
);

export default App;
