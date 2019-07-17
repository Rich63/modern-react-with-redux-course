import React, { Component } from 'react';
import { connect } from "react-redux";
// see 189
// import { fetchUser } from "../actions";

class UserHeader extends Component {
  // see 189
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // };

  render() {
    const { user } = this.props   // moved to mapStateToProps .users.find((user) => user.id === this.props.userId);
    
    if (!user) { return null; }
    
    return (
      <div className="header">{ user.name }</div>
    );
  };
};

const mapStateToProps = (state, ownProps) => { // ownProps = reference to this.props
  return { 
    user: state.users.find((user) => user.id === ownProps.userId)
  };
};

export default connect(
  mapStateToProps
)(UserHeader);