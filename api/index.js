import express from "express";
import data from "../src/testData.json";

const router = express.Router();
//do this operation once, reuse it down below
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get("/contests", (req, res) => {
  res.send({
    contests: contests,
  });
});

export default router;
