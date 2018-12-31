import React, { Component } from "react";
import { Segment, Comment } from "semantic-ui-react";
import ChatForm from "./ChatForm";
import { Link } from "react-router-dom";
import { distanceInWords } from "date-fns";

class Reviews extends Component {
  state = {
    showReplyForm: false,
    selectedReviewId: null
  };

  handleOpenReplyForm = id => () => {
    this.setState({
      showReplyForm: true,
      selectedReviewId: id
    });
  };

  handleCloseReplyForm = () => {
    this.setState({
      selectedReviewId: null,
      showReplyForm: false
    });
  };

  render() {
    const { addReviews, restaurantId, restaurantChat } = this.props;
    const { showReplyForm, selectedReviewId } = this.state;
    return (
      <div>
        <Segment attached>
          <Comment.Group>
            {restaurantChat &&
              restaurantChat.map(review => (
                <Comment key={review.id}>
                  <Comment.Avatar src={review.photoURL || "/assets/user.png"} />
                  <Comment.Content>
                    <Comment.Author as={Link} to={`/profile/${review.uid}`}>
                      {review.displayName}
                    </Comment.Author>
                    <Comment.Metadata>
                      <div>{distanceInWords(review.date, Date.now())} ago</div>
                    </Comment.Metadata>
                    <Comment.Text>{review.text}</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action onClick={this.handleOpenReplyForm(review.id)}>Reply</Comment.Action>
                      {showReplyForm && selectedReviewId === review.id && (
                        <ChatForm
                          addReviews={addReviews}
                          restaurantId={restaurantId}
                          form={`reply_${review.id}`}
                          closeForm={this.handleCloseReplyForm}
                          parentId={review.id}
                        />
                      )}
                    </Comment.Actions>
                  </Comment.Content>
                  {review.childNodes &&
                    review.childNodes.map(child => (
                      <Comment.Group>
                        <Comment key={child.id}>
                          <Comment.Avatar src={child.photoURL || "/assets/user.png"} />
                          <Comment.Content>
                            <Comment.Author as={Link} to={`/profile/${child.uid}`}>
                              {child.displayName}
                            </Comment.Author>
                            <Comment.Metadata>
                              <div>{distanceInWords(child.date, Date.now())} ago</div>
                            </Comment.Metadata>
                            <Comment.Text>{child.text}</Comment.Text>
                            <Comment.Actions>
                              <Comment.Action onClick={this.handleOpenReplyForm(child.id)}>Reply</Comment.Action>
                              {showReplyForm && selectedReviewId === child.id && (
                                <ChatForm
                                  addReviews={addReviews}
                                  restaurantId={restaurantId}
                                  form={`reply_${child.id}`}
                                  closeForm={this.handleCloseReplyForm}
                                  parentId={review.parentId}
                                />
                              )}
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                      </Comment.Group>
                    ))}
                </Comment>
              ))}
          </Comment.Group>
          <ChatForm parentId={0} addReviews={addReviews} restaurantId={restaurantId} form={"newReview"} />
        </Segment>
      </div>
    );
  }
}

export default Reviews;
