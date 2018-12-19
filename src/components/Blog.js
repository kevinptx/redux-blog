import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";

const Blog = ({ id, name, body, dispatch }) => (
  <div>
    <Link to={`blog/${id}`}>
      <Segment basic inverted>
        {name}
        <br />
        {body}
      </Segment>
    </Link>
    <Button onClick={() => dispatch({ type: "DELETE", id })}>
      Delete Blog
    </Button>
    <br />
    <br />
  </div>
);

export default connect()(Blog);

//show for invidual blog
// that's where I can take care of the edit and delete on the individual blog show page.
