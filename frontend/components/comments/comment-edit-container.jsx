//
import React from 'react';
import { connect } from 'react-redux';
import { updateComment, fetchComment, clearErrors, deleteComment } from '../../actions/comment_actions';

class EditComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.comment.id,
            body: this.props.comment.body,
            card_id: this.props.comment.card_id,
            author_id: this.props.comment.author_id,
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateComment(this.state)
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteComment(this.state.id)
    }

    handleChange(field) {
        return e => {
            e.preventDefault()
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    // componentWillUnmount() {
    //     this.props.clearErrors();
    // }

    showErrors() {
        const liErrors = this.props.errors.map((error, i) => {
            return (<li key={`edit-card-errors${i}`}>{error}</li>)
        })
        return (
            <ul className="edit-card-errors">{liErrors}</ul>
        );
    }

    showEditandDelete() { //if i want to add edit and delete features
        return (
        <div>
            <input type="text"
                className="edit-comment-body"
                value={this.state.body}
                onChange={this.handleChange("body")} 
                placeholder="Edit"
                onBlur={this.handleUpdate}/>
            <button onClick= {this.handleDelete}>Delete Comment</button>
        </div>
        )
    }


    render() {
        if (!this.state) return null;
        //("edit item", this.state)
        return (
            <div className="edit-comment-container">
                {/* {this.showErrors()} */}

                <h3>{}</h3>
                <p>{this.state.body}</p>


            </div>
        );
    }
}

const mstp = (state, props) => {
    return {
        errors: state.errors.comment,
        comment: props.comment
    }
}

const mdtp = dispatch => {
    return {
        fetchComment: (commentid) => dispatch(fetchComment(commentid)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (commentid) => dispatch(deleteComment(commentid)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
}

export default connect(mstp, mdtp)(EditComment);