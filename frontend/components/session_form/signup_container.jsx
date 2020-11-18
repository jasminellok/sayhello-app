import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up'
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mstp, mdtp)(SessionForm);
