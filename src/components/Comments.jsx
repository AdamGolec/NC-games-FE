import { useState, useEffect } from "react";
import { getComments } from "../utils/api.js";
import { useParams } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { review_id } = useParams();

  useEffect(() => {
    getComments(review_id).then((commentData) => {
      setComments(commentData);
      setLoading(false);
    });
  }, [review_id]);

  console.log(comments);

  return loading ? (
    <p className="loading">...Loading...</p>
  ) : (
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li
              key={comment.comment_id}
              className="comments-list__single-comment"
            >
              <h3>{comment.author}</h3>
              <p className="comments-list__comment-text">{comment.body}</p>
              <p className="comments-list__votes">{comment.votes} likes</p>
            </li>
          );
        })}
      </ul>
  );
}

export default Comments;
