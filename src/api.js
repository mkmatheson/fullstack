import axios from "axios";

export const fetchContest = (contestId) => {
  // remember the need for the '/' before api
  return axios.get(`/api/contests/${contestId}`).then((resp) => resp.data);
};

export const fetchContestList = () => {
  return axios.get(`/api/contests`).then((resp) => resp.data.contests);
};
