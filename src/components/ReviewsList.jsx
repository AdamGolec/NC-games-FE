import { useEffect, useState} from "react";
import { getReviews } from "../utils/api";

function ReviewsList() {
  const [reviewsList, setReviewsList] = useState([]);
  useEffect(() => {
    getReviews().then((reviewsList) => {
      setReviewsList(reviewsList);
    });
  }, []);

  return (
    <ul className="reviewsList">
      {reviewsList.map((review) => {
        return <li key={review.review_id} className="singleReview">
          <h3>{review.title}</h3>
          <img src={review.review_img_url} alt={review.title} />
          <p className="reviewText">{review.review_body}</p>
          <p>Posted by: {review.owner}</p>
          <p>{review.votes} likes</p>
        </li>;
      })}
    </ul>
  );
}

export default ReviewsList;
