import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { createComment, clearErrors, fetchAllComments } from '../../actions/comment_actions';

class CreateComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: "",
            author_id: this.props.currentUser.id,
            card_id: this.props.cardId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.body.trim().length === 0) return null;
        this.props.createComment(this.props.cardId, this.state)
        this.setState({
            body: "",
            author_id: this.props.currentUser.id,
            card_id: this.props.cardId
        })
    }


    handleChange(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    // showErrors() {
    //     const errors = this.props.errors;
    //     const liErrors = errors.map((error, i) => {
    //         return (<li key={`create-omment-errors${i}`}>{error}</li>)
    //     })
    //     return (
    //         <ul className="create-comment-errors">{liErrors}</ul>
    //     );
    // }

    render() {
        return (<div>
            {/* {this.showErrors()} */}
            <form onSubmit={this.handleSubmit} className="create-comment-form">
                <div className="create-comment-title">
                    <input type="text"
                        value={this.state.body}
                        onChange={this.handleChange('body')}
                        placeholder="Write a comment"
                    />
                </div>
                <button type="submit"> Save </button>
            </form>
        </div>)
    }
}

const mstp = (state, props) => {
    return {    
        currentUser: state.entities.users[state.session.id],
        commentId: props.commentId,
        errors: state.errors.comments,
    };
};

const mdtp = dispatch => {
    return {
        fetchAllComments: (cardId) => dispatch(fetchAllComments(cardId)),
        createComment: (cardId, comment) => dispatch(createComment(cardId, comment)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
};

export default withRouter(connect(mstp, mdtp)(CreateComment));