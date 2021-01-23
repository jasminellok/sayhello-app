import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors  } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Log in'
  };
};

const mdtp = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => {
      return dispatch(clearErrors())
    }
  };
};

export default connect(mstp, mdtp)(SessionForm);
