import { useState, useEffect } from "react";
import { getReviewById, patchDownVote, patchUpVote } from "../utils/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

function Review() {
  const [showComments, setShowComments] = useState(false);

  const [review, setReview] = useState({});
  const [loading, setLoading] = useState([true]);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((reviewData) => {
      setReview(reviewData);
      setLoading(false);
    });
  }, [review_id]);

  function showOnClick() {
    setShowComments(true);
  }
  function commentsTxt() {
    if (review.comment_count === 0) {
      return "There are no comments yet.";
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
    patchUpVote(review_id).catch((err) => {
      setReview((currReview) => {
        if (currReview.review_id === review_id) {
          return { ...currReview, votes: currReview.votes - 1 };
        }
        return currReview;
      });
    });
  };

  const handleDownVote = (review_id) => {
    setReview((currReview) => {
      if (currReview.review_id === review_id) {
        return { ...currReview, votes: currReview.votes - 1 };
      }
      return currReview;
    });
    patchDownVote(review_id).catch((err) => {
      setReview((currReview) => {
        if (currReview.review_id === review_id) {
          return { ...currReview, votes: currReview.votes + 1 };
        }
        return currReview;
      });
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
        <button
          className="review__like-button"
          onClick={() => handleUpVote(review.review_id)}
        >
          👍
        </button>
        <p>{review.votes} likes</p>
        <button
          className="review__dislike-button"
          onClick={() => handleDownVote(review.review_id)}
        >
          👎
        </button>
      </div>
      <p
        className="comments-list__show-comments"
        onClick={() => {
          showOnClick();
        }}
      >
        {commentsTxt()}
      </p>
      {showComments && <Comments />}
    </main>
  );
}
export default Review;
