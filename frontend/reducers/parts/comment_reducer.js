
import { REC_COMMENT, REC_ALL_COMMENTS, REMOVE_COMMENT } from '../../actions/comment_actions';

const CommentReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state }

    switch (action.type) {
        case REC_COMMENT:
            return Object.assign({}, state, { [action.comment.id]: action.comment })
        case REC_ALL_COMMENTS:
            return Object.assign({}, state, action.comments);
        case REMOVE_COMMENT:
            //;
            delete newState[action.commentId]
            return newState;
        default:
            return state;
    }
};

export default CommentReducer;