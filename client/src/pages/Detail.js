import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/GridResume";
import JumbotronResume from "../components/JumbotronResume";
import API from "../utils/API";

class Detail extends Component {
  state = {
    resume: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id
  componentDidMount() {
    API.getResume(this.props.match.params.id)
      .then(res => this.setState({ resume: res.data }))
      .catch(err => console.log(err));
  }




  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <JumbotronResume>
              <h1>
                {this.state.resume.title} by {this.state.resume.author}
              </h1>
            </JumbotronResume>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>{this.state.resume.synopsis}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Resume Repository</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
