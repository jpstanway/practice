import React from "react";
import { connect } from "react-redux";

import { filterContent } from "../reducers/filterReducer";

const Filter = props => {
  const handleChange = event => {
    const filter = event.target.value;
    props.filterContent(filter);
  };

  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(
  null,
  { filterContent }
)(Filter);