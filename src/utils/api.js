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
