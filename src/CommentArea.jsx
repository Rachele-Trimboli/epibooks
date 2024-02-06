import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  // };
  const [comments, setComments] = useState([]);

  // componentDidUpdate(prevProps) {
  //   if (this.props.asin !== prevProps.asin) {

  //   }
  // }
  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMzVjOTE4N2U1YzAwMTgxNGM1ZmMiLCJpYXQiOjE3MDY3OTE0NDIsImV4cCI6MTcwODAwMTA0Mn0.XRfaNUUD4kXBAkIR3ZDjNkCY9h5Z5NfxUHam9zEOITQ",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        // this.setState({
        //   comments: data,
        // });
        setComments(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (props.asin) {
      fetchComments();
    }
    // console.log(props.asin);
  }, [props.asin]);

  return comments ? (
    <>
      <CommentList array={comments}></CommentList>
      <AddComment asin={props.asin}></AddComment>
    </>
  ) : (
    <>
      <AddComment asin={props.asin}></AddComment>
    </>
  );
};

export default CommentArea;
