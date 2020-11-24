import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchAllLists, deleteList, createList, updateList, clearErrors } from '../../actions/list_actions';
import { withRouter } from "react-router";
//import { openModal } from '../../actions/modal_action';
//Object.values(lists).sort((a,b) => (a.ord>b.ord) ? 1 : -1)

const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mdtp = dispatch => {
    return {
        fetchAllLists: (boardId) => dispatch(fetchAllLists(boardId)),
        deleteList: (listId) => dispatch(deleteList(listId)),
        createList: (boardId, list) => dispatch(createList(boardId, list)),
        updateList: (list) => dispatch(updateList(list)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
};


export default withRouter(connect(mstp, mdtp)(ListIndex));
