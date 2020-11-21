import React from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_action';


class EditBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board
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
            return (<li key={`edit-board-errors${i}`}>{error}</li>)
        })
        return (
            <ul className="edit-board-errors">{liErrors}</ul>
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
        board: state.boards[ownProps.match.params.boardId]
    };
};

const mdtp = dispatch => {
    return {
        updateBoard: (board) => dispatch(updateBoard(board))
    };
};

export default connect(mstp, mdtp)(EditBoard);