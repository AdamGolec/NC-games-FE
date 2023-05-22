import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-games-n925.onrender.com/api",
});

export const getReviews = () => {
  return myApi.get("/reviews").then(({ data }) => {
    return data.review;
  });
};

export const getReviewById = (review_id) => {
  return myApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const getComments = (review_id) => {
  return myApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchUpVote = (review_id) => {
  const patchBody = {
    inc_votes: 1,
  };
  return myApi.patch(`/reviews/${review_id}`, patchBody).then(({ data }) => {
    return data;
  });
};

export const patchDownVote = (review_id) => {
  const patchBody = {
    inc_votes: -1,
  };
  return myApi.patch(`/reviews/${review_id}`, patchBody).then(({ data }) => {
    return data;
  });
};

export const postComment = (newCommentText, username, review_id) => {
  const postBody = {
    body: newCommentText,
    username: username,
  };

  return myApi
    .post(`/reviews/${review_id}/comments`, postBody)
    .then(({ data }) => {
      return data.comments;
    });
};
