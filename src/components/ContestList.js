import React from "react";
import propTypes from "prop-types";
import ContestPreview from "./ContestPreview";

const ContestList = ({ contests }) => {
  return (
    <div>
      {contests.map((contest) => (
        <ContestPreview key={contest.id} {...contest} />
      ))}
    </div>
  );
};

ContestList.propTypes = {
  contests: propTypes.array,
};

export default ContestList;
