import React from 'react';
import { withRouter } from "react-router";
import { createList, clearErrors } from '../../actions/list_actions';
import { connect } from 'react-redux';

class CreateList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            title: "",
            ord: this.props.ord,
            board_id: this.props.boardId 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.title.trim().length === 0) return null;
        this.props.createList(this.props.boardId,this.state)
        this.setState({
            title: "",
            ord: this.props.ord,
            board_id: this.props.boardId
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
        return (
                <form onSubmit={this.handleSubmit} className="create-list-form">
                    {this.showErrors()}
                    <div className="create-list-input">
                        <input type="text"
                            value={this.state.title}
                            onChange={this.handleChange('title')}
                            placeholder="Enter List Title ..."
                        />
                    </div>
                    <button type="submit" className="create-list-submit"> Add List </button>
                </form>
        )
    }
}  

const mstp = (state, props) => {
    return {    
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.list
    };
};


const mdtp = dispatch => {
    return {
        fetchAllLists: (boardId) => dispatch(fetchAllLists(boardId)),
        createList: (boardId, list) => dispatch(createList(boardId, list)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
};


export default withRouter(connect(mstp, mdtp)(CreateList));