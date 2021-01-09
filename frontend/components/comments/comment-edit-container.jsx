//
import React from 'react';
import { connect } from 'react-redux';
import { updateComment, fetchComment, clearErrors } from '../../actions/comment_actions';

class EditComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.comment.id,
            body: this.props.comment.body,
            card_id: this.props.comment.card_id,
            author_id: this.props.comment.author_id,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateCard(this.state)
    }

    handleChange(field) {
        return e => {
            e.preventDefault()
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    showErrors() {
        const liErrors = this.props.errors.map((error, i) => {
            return (<li key={`edit-card-errors${i}`}>{error}</li>)
        })
        return (
            <ul className="edit-card-errors">{liErrors}</ul>
        );
    }


    render() {
        if (!this.state) return null;
        return (
            <div className="edit-comment-container">
                {this.showErrors()}
                <form onSubmit={this.handleSubmit} className="edit-comment-form">
                    <section className="edit-comment-body">
                        <input type="text"
                            className="edit-comment-body"
                            value={this.state.body}
                            onChange={this.handleChange("body")} 
                            placeholder={this.state.body}
                            onBlur={this.handleSubmit}/>
                    </section>

                </form>
            </div>
        );
    }
}

const mstp = (state, props) => {
    return {
        errors: state.errors.card,
        comment: props.comment
    }
}

const mdtp = dispatch => {
    return {
        fetchComment: (commentid) => dispatch(fetchComment(commentid)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment.id)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
}

export default connect(mstp, mdtp)(EditComment);