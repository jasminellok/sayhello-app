import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors  } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Login'
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => {
      return dispatch(clearErrors())
    }
  };
};

export default connect(mstp, mdtp)(SessionForm);
