import { useState } from "react";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api.js";

const AddComment = (props) => {
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [postStatus, setPostStatus] = useState("");
  const [showStatus, setShowStatus] = useState(true);
  const { review_id } = useParams();
  const { setComments } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    postComment(newComment, username, review_id)
      .then(() => {
        setPostStatus("Thanks for posting your comment!");
        setShowStatus(false);
        getComments(review_id).then((commentData) => {
          setComments(commentData);
        });
      })
      .catch((error) => {
        setPostStatus(
          "Something went wrong :( Make sure you're using existing Username"
        );
      });
  };

  return (
    <>
      {showStatus && (
        <>
          <form className="add-comment__form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              placeholder="Existing username"
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
            <label htmlFor="newComment">Add comment</label>
            <textarea
              placeholder="Your comment here..."
              id="newComment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            ></textarea>

            <button>Post</button>
          </form>
        </>
      )}
      <p>{postStatus}</p>
    </>
  );
};

export default AddComment;
