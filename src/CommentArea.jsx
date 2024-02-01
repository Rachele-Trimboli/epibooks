import { Component } from "react";

import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMzVjOTE4N2U1YzAwMTgxNGM1ZmMiLCJpYXQiOjE3MDY3OTE0NDIsImV4cCI6MTcwODAwMTA0Mn0.XRfaNUUD4kXBAkIR3ZDjNkCY9h5Z5NfxUHam9zEOITQ",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        // console.log(data);
        this.setState({
          comments: data,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // console.log(this.props);
    return (
      <>
        <CommentList array={this.state.comments}></CommentList>
        <AddComment asin={this.props.asin}></AddComment>
      </>
    );
  }
}
export default CommentArea;
