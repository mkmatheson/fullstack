import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  //this is an API call, so send a JSON object as a response
  res.send({ data: [] });
});

//router must be exported in order to be used
export default router;
