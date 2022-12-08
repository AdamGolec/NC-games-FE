import { useState, useEffect } from "react";
import { getReviewById, patchDownVote, patchUpVote } from "../utils/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

function Review() {
  const [showVote, setShowVote] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [voteStatus, setVoteStatus] = useState("");
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((reviewData) => {
      setReview(reviewData);
      setLoading(false);
    });
  }, [review_id]);

  function showOnClick() {
    setShowComments((current) => !current);
  }
  function commentsTxt() {
    if (review.comment_count === 0) {
      return "There are no comments yet.";
    } else if (review.comment_count === 1) {
      return `Show ${review.comment_count} comment`;
    }
    return `Show ${review.comment_count} comments`;
  }
  const handleUpVote = (review_id) => {
    setReview((currReview) => {
      if (currReview.review_id === review_id) {
        return { ...currReview, votes: currReview.votes + 1 };
      }
      return currReview;
    });
    setShowVote(false);
    setVoteStatus("Thanks for voting!");
    patchUpVote(review_id).catch((err) => {
      setReview((currReview) => {
        if (currReview.review_id === review_id) {
          return { ...currReview, votes: currReview.votes - 1 };
        }
        return currReview;
      });
      setVoteStatus("Voting failed!");
      setShowVote(true);
    });
  };

  const handleDownVote = (review_id) => {
    setReview((currReview) => {
      if (currReview.review_id === review_id) {
        return { ...currReview, votes: currReview.votes - 1 };
      }
      return currReview;
    });
    setShowVote(false);
    setVoteStatus("Thanks for voting!");
    patchDownVote(review_id).catch((err) => {
      setReview((currReview) => {
        if (currReview.review_id === review_id) {
          return { ...currReview, votes: currReview.votes + 1 };
        }
        return currReview;
      });
      setVoteStatus("Voting failed!");
      setShowVote(true);
    });
  };

  return loading ? (
    <p className="loading">...Loading...</p>
  ) : (
    <main className="review">
      <h3>{review.title}</h3>
      <img
        src={review.review_img_url}
        alt="Review cover"
        className="review_img"
      />
      <p className="review__body_p">{review.review_body}</p>
      <p>Posted by {review.owner}</p>
      <div className="review__like-container">
        {showVote && (
          <button
            className="review__like-button"
            onClick={() => handleUpVote(review.review_id)}
          >
            👍
          </button>
        )}
        <p>{review.votes} likes</p>
        <div>{voteStatus}</div>
        {showVote && (
          <button
            className="review__dislike-button"
            onClick={() => handleDownVote(review.review_id)}
          >
            👎
          </button>
        )}
      </div>
      <div
        className="review__show-comments"
        onClick={() => {
          showOnClick();
        }}
      >
        {commentsTxt()}
      </div>
      {showComments && (
        <>
          <Comments review_id={review_id} />
        </>
      )}
    </main>
  );
}
export default Review;
