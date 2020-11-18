import { connect } from 'react-redux';
import BoardIndex from './board_index';

const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mdtp = dispatch => {
    return {
        //login: (user) => dispatch(login(user))
    }
};


export default connect(mstp, mdtp)(BoardIndex);
