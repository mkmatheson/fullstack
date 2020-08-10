import React from "react";
import propTypes from "prop-types";
import ContestPreview from "./ContestPreview";

const ContestList = ({ contests, onContestClick }) => {
  return (
    <div>
      {Object.keys(contests).map((contestId) => (
        <ContestPreview
          key={contestId}
          {...contests[contestId]}
          onClick={onContestClick}
        />
      ))}
    </div>
  );
};

ContestList.propTypes = {
  contests: propTypes.object,
  onContestClick: propTypes.func.isRequired,
};

export default ContestList;
