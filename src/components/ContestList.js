import React from "react";
import propTypes from "prop-types";
import ContestPreview from "./ContestPreview";

const ContestList = ({ contests, onContestClick }) => {
  return (
    <div>
      {contests.map((contest) => (
        <ContestPreview
          key={contest.id}
          {...contest}
          onClick={onContestClick}
        />
      ))}
    </div>
  );
};

ContestList.propTypes = {
  contests: propTypes.array,
  onContestClick: propTypes.func.isRequired,
};

export default ContestList;
