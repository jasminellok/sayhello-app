import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { createCard, clearErrors, fetchCard } from '../../actions/card_actions';

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
    }

    componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);
        }
    }


    handleChange(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    showErrors() {
        const errors = getState().errors.list;
        const liErrors = errors.map((error, i) => {
            return (<li key={`create-list-errors${i}`}>{error}</li>)
        })
        return (
            <ul className="create-list-errors">{liErrors}</ul>
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="create-list-form">
                {this.showErrors()}
                <input type="text"
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                    placeholder="Enter a title for this card..."
                />
                <button type="submit"> Add Card </button>
            </form>
        )
    }
}

const mdtp = dispatch => {
    return {
        createCard: (listId, card) => dispatch(createCard(listId, card)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
};

export default withRouter(connect(null, mdtp)(CreateCard));