import { useState, useEffect } from "react";
import { getReviewById } from "../utils/api";
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
      <p>{review.votes} likes</p>
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
