import { connect } from 'react-redux';
import React from 'react';
import { signup, login, clearErrors } from '../../actions/session_actions';
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
    login: (user) => dispatch(login(user)),
    clearErrors: () => {
      return dispatch(clearErrors())
    }
  };
};

export default connect(mstp, mdtp)(SessionForm);
