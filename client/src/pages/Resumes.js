import React, { Component } from "react";
import DeleteBtnResume from "../components/DeleteBtnResume";
import JumbotronResume from "../components/JumbotronResume";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/GridResume";
import { ListResume, ListItemResume } from "../components/ListResume";
import { Input, TextArea, FormBtn } from "../components/FormResume";

class Resumes extends Component {
  state = {
    resumes: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadResumes();
  }

  loadResumes = () => {
    API.getResumes()
      .then(res =>
        this.setState({ resumes: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteResume = id => {
    API.deleteResume(id)
      .then(res => this.loadResumes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveResume({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadResumes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <JumbotronResume>
              <h1>Resume Repository</h1>
            </JumbotronResume>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Company"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Body of Resume"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Resume
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <JumbotronResume>
              <h1>Current Resumes</h1>
            </JumbotronResume>
            {this.state.resumes.length ? (
              <ListResume>
                {this.state.resumes.map(resume => (
                  <ListItemResume key={resume._id}>
                    <Link to={"/resumes/" + resume._id}>
                      <strong>
                        {resume.title} by {resume.author}
                      </strong>
                    </Link>
                    <DeleteBtnResume onClick={() => this.deleteResume(resume._id)} />
                  </ListItemResume>
                ))}
              </ListResume>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Resumes;
