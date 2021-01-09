import React from 'react';
import { connect } from 'react-redux';
import { fetchAllComments, deleteComment, createComment, updateComment, clearErrors } from '../../actions/comment_actions';
import { withRouter } from "react-router";
import CreateCommentCont from "./comment-create-container";
import CommentEdit from "./comment-edit-container";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: this.props.comments
        }
    }

    componentDidMount() {
        this.props.fetchAllComments(this.props.cardId)
            .then(() => {
                let comments = this.props.comments
                this.setState({ comments })
            })
    }

    componentDidUpdate(prevProps) {
        console.log("prevprops", prevProps.commentIds)
        console.log("this.props", this.props.commentIds)
        if (this.props.commentIds !== prevProps.commentIds) {
            let comments = this.props.comments
            this.setState({ comments })
        }
    }

    render() {
        if (!this.state.comments) return null;
        const comments = this.state.comments;

        const commentItems = comments.map((comment, i) => {
            return (
                <CommentEdit comment={comment} 
                deleteComment={this.props.deleteComment} 
                updateComment={this.props.updateComment} 
                key={`comment-index-${i}`}/>
            )
        });

        return (
            <div className="">
                {commentItems}
                <CreateCommentCont cardId={this.props.cardId} />
            </div>)
    }

};

const mstp = (state, props) => {
    return {
        currentUser: state.entities.users[state.session.id],
        cardId: props.cardId,
        comments: Object.values(state.entities.comments).filter(comment => comment.card_id === props.cardId),
        commentIds: Object.keys(state.entities.comments)
    };
};

const mdtp = dispatch => {
    return {
        fetchAllComments: (cardId) => dispatch(fetchAllComments(cardId)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        createComment: (cardId, comment) => dispatch(createComment(cardId, comment)),
        updateComment: (commentId) => dispatch(updateComment(commentId)),
        clearErrors: () => {return dispatch(clearErrors())},
    }
};


export default withRouter(connect(mstp, mdtp)(CommentIndex));
