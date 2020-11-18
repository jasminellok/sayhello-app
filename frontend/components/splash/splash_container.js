import { connect } from 'react-redux';
import Splash from './splash';

const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

export default connect(mstp, null)(Splash);
