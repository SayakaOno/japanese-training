import React from "react";
import { connect } from "react-redux";

const StudiedTime = props => {
  return (
    props.studiedTime > 0 && (
      <div className="studied-time ui yellow image label">
        <div>
          <i className="stopwatch icon" /> {props.studiedTime} min
        </div>
      </div>
    )
  );
};

const mapStateToProps = state => {
  return { studiedTime: state.studiedTime };
};

export default connect(mapStateToProps)(StudiedTime);
