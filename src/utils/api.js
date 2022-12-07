import axios from "axios";


const myApi = axios.create({
  baseURL: "https://lazy-lime-prawn-gear.cyclic.app/api",
});

export const getReviews = () => {
  return myApi.get("/reviews").then((res) => {
    console.log(res.data.review);
    return res.data.review;
  });
};

export const getReviewById = (review_id) => {
  return myApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getComments = (review_id) => {
  return myApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};