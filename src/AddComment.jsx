import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  state = {
    newComments: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  render() {
    return (
      <Form
        onSubmit={(e) => {
          console.log(this.state);
          fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: "POST",
            body: JSON.stringify(this.state.newComments),
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMzVjOTE4N2U1YzAwMTgxNGM1ZmMiLCJpYXQiOjE3MDY3OTE0NDIsImV4cCI6MTcwODAwMTA0Mn0.XRfaNUUD4kXBAkIR3ZDjNkCY9h5Z5NfxUHam9zEOITQ",
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                alert("Grazie per il tuo pensiero");

                this.setState({
                  newComments: {
                    comment: "",
                    rate: "",
                  },
                });
              } else {
                throw new Error();
              }
            })
            .catch((e) => {
              alert(e);
            });
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Dacci un voto da uno a 5</Form.Label>
          <Form.Control
            type="number"
            value={this.state.newComments.rate}
            onChange={(e) => {
              this.setState({
                newComments: {
                  ...this.state.newComments,
                  rate: e.target.value,
                },
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dicci cosa ne pensi!</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={this.state.newComments.comment}
            onChange={(e) => {
              this.setState({
                newComments: {
                  ...this.state.newComments,
                  comment: e.target.value,
                },
              });
            }}
          />
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
export default AddComment;
