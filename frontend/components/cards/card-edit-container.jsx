//
import React from 'react';
import { connect } from 'react-redux';
import { updateCard, fetchCard, clearErrors } from '../../actions/card_actions';
import { closeModal } from '../../actions/modal_action';
import CommentIndex from "../comments/comment-index-container"


class EditCard extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.card.id,
            title: this.props.card.title,
            description: (this.props.card.description ? this.props.card.description : ""),
            deadline: (this.props.card.deadlined ? this.props.card.deadline : ""), //edit date
            list_id: this.props.card.listId,
            ord: this.props.card.ord,
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
        console.log("edit-card", this.props.card)
        return (
            <div className="edit-card-container">
                {this.showErrors()}
                <form className="edit-card-form">
                    <section className="edit-card-title">
                        <input type="text" 
                            className="edit-card-title"
                            value={this.state.title}
                            onChange={this.handleChange("title")} 
                            placeholder={this.state.title}
                            onBlur={this.handleSubmit}/>
                        <div onClick={this.props.closeModal} className="edit-card-closex">x</div>
                    </section>

                    <div className="card-edit-form-info">
                        <section className="edit-card-descp">
                            <div className="edit-card-description"> Description </div>
                            <textarea row="5"
                                value={this.state.description}
                                onChange={this.handleChange("description")} 
                                onBlur={this.handleSubmit}/>
                        </section>

                        <section className="edit-card-side">
                            <h2>ADD TO CARD</h2>
                            <div className="edit-card-deadline"> 
                                <h3>Deadline</h3>
                                <input type="date" 
                                    className="edit-card-deadline"
                                    value={this.state.deadline}
                                    onChange={this.handleChange("deadline")} 
                                    placeholder={this.state.deadline}
                                    onBlur={this.handleSubmit}/>
                            </div>
                        </section>
                    </div>
                </form>
                
                <section className="card-comment-index-ctn">
                    <div className="comment-headr">Comments</div>
                    <CommentIndex cardId={this.props.card.id}/>
                </section>
            
            </div>
        );
    }
}

const mstp = (state, props) => {
    return {
        errors: state.errors.card,
        card: props.card
    }
}

const mdtp = dispatch => {
    return {
        fetchCard: (id) => dispatch(fetchCard(id)),
        updateCard: (card) => dispatch(updateCard(card)),
        closeModal: () => dispatch(closeModal()),
        deleteCard: (card) => dispatch(deleteCard(card.id)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
}

export default connect(mstp, mdtp)(EditCard);