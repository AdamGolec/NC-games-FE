import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

function ReviewsList() {
  const [reviewsList, setReviewsList] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    getReviews().then((reviewsList) => {
      setReviewsList(reviewsList);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p className="loading">...Loading...</p>
  ) : (
    <ul className="reviews-list">
      {reviewsList.map((review) => {
        return (
          <li key={review.review_id} className="reviews-list__single-review">
            <h3>{review.title}</h3>
            <img src={review.review_img_url} alt={review.title} />
            <p className="reviews-list__review-text">{review.review_body}</p>
            <p>Posted by: {review.owner}</p>
            <p>{review.votes} likes</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewsList;
