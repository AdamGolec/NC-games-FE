import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function ReviewsList({
  filterCategory,
  setFilterCategory,
  filterOrderBy,
  filterSortBy,
}) {
  const [reviewsList, setReviewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({});
  useEffect(() => {
    const category = searchParams.get("category");
    setFilterCategory(category || "all");
  }, []);
  useEffect(() => {
    setSearchParams({ category: filterCategory });
    setLoading(true);
    getReviews().then((reviewsList) => {
      console.log(reviewsList);
      setReviewsList(() => {
        return reviewsList
          .filter(
            (review) =>
              review.category === filterCategory || filterCategory === "all"
          )
          .sort((review1, review2) =>
            filterOrderBy === "asc"
              ? review2.review_id - review1.review_id
              : review1.review_id - review2.review_id
          )
          .sort((review1, review2) => {
            if (filterSortBy === "votes") {
              return filterOrderBy === "asc"
                ? review1.votes - review2.votes
                : review2.votes - review1.votes;
            } else if (filterSortBy === "comment_count") {
              return filterOrderBy === "asc"
                ? review1.comment_count - review2.comment_count
                : review2.comment_count - review1.comment_count;
            }
            return filterOrderBy === "asc"
              ? review1.date - review2.date
              : review2.date - review1.date;
          });
      });
      setLoading(false);
    });
  }, [filterCategory, filterOrderBy, filterSortBy]);
  return loading ? (
    <p className="loading">...Loading...</p>
  ) : (
    <>
      <ul className="reviews-list">
        {reviewsList.map((review) => {
          return (
            <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
              <li
                key={review.review_id}
                className="reviews-list__single-review"
              >
                <h3>{review.title}</h3>
                <img src={review.review_img_url} alt={review.title} />
                <p className="reviews-list__review-text">
                  {review.review_body}
                </p>
                <p>Posted by: {review.owner}</p>
                <p>{review.votes} likes</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default ReviewsList;
