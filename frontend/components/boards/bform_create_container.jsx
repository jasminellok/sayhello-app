// container and presentation in one + modals

import React from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_action';


class CreateBoard extends React.Component {
    constructor(props) {
        super(props)  
        this.state ={title: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state)
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    showErrors() {
        const liErrors = this.props.errors.map((error, i) => {
            return (<li key={`create-board-errors${i}`}>{error}</li>)
        })
        return (
            <ul className="create-board-errors">{liErrors}</ul>
        );
    }

    render() {
        return (<div className="create-board-modal">
            <form onSubmit={this.handleSubmit} className="create-board-form">
                <div onClick={this.props.closeModal} className="close-x">x</div>
                <input type="text"
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                    placeholder="Add board title"
                /> 
                {this.showErrors()}
                <button type="submit">Create Board</button>               
            </form>
        </div>)
    }
}        

const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.board,
        formType: 'create board',
    };
};

const mdtp = dispatch => {
    return {
        createBoard: (board) => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mstp, mdtp)(CreateBoard);