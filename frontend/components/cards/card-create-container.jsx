import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { createCard, clearErrors, fetchAllCards } from '../../actions/card_actions';

class CreateCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            deadline: "",
            ord: this.props.ord,
            list_id: this.props.listId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createCard(this.props.listId, this.state)
        this.setState({
            title: "",
            description: "",
            deadline: "",
            ord: this.props.ord,
            list_id: this.props.listId
        })
    }


    handleChange(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    showErrors() {
        const errors = this.props.errors;
        const liErrors = errors.map((error, i) => {
            return (<li key={`create-list-errors${i}`}>{error}</li>)
        })
        return (
            <ul className="create-list-errors">{liErrors}</ul>
        );
    }

    render() {
        return (<div>
            {this.showErrors()}
            <form onSubmit={this.handleSubmit} className="create-card-form">
                <div className="create-card-title">
                    <input type="text"
                        value={this.state.title}
                        onChange={this.handleChange('title')}
                        placeholder="Enter a title for this card..."
                    />
                </div>
                <button type="submit"> + </button>
            </form>
        </div>)
    }
}

const mstp = (state, props) => {
    return {    
        currentUser: state.entities.users[state.session.id],
        listId: props.listId,
        cards: state.entities.cards,
        cardIds: Object.keys(state.entities.cards),
        //cardIds: state.entities.lists[listId].cardIds
        errors: state.errors.card
    };
};

const mdtp = dispatch => {
    return {
        fetchAllCards: (listId) => dispatch(fetchAllCards(listId)),
        createCard: (listId, card) => dispatch(createCard(listId, card)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
};

export default withRouter(connect(mstp, mdtp)(CreateCard));