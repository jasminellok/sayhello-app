//
import React from 'react';
import { connect } from 'react-redux';
import { updateCard, fetchCard, clearErrors } from '../../actions/card_actions';
import { closeModal } from '../../actions/modal_action';


class EditBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.card.id,
            title: this.props.card.title,
            description: (this.props.card.description ? this.props.card.description : ""),
            deadline: (this.props.card.deadlined ? this.props.card.deadline : ""),
            list_id: this.props.card.listId,
            ord: this.props.card.ord,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        //console.log("card submit", this.state)
        this.props.updateCard(this.state)
        //window.location.reload();
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
            <div className="edit-card-container">
                <form onSubmit={this.handleSubmit} className="edit-card-form">

                    {this.showErrors()}

                    <section className="edit-card-title">
                        <div onClick={this.props.closeModal} className="edit-card-closex">x</div>
                        <div className="edit-card-title">Title </div>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.handleChange("title")} />
                    </section>

                    <section className="edit-card-descp">
                        <div className="edit-card-description"> Description </div>
                        <textarea row="5"
                            value={this.state.description}
                            onChange={this.handleChange("description")} />
                    </section>

                    <section className="edit-card-deadline">
                        need deadline input
                    </section>

                    <section className="edit-card-submit">
                        <button className="edit-card-btn" >Make Changes!</button>
                    </section>

                </form>
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

export default connect(mstp, mdtp)(EditBoard);