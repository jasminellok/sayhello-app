
import React from 'react';
import { connect } from 'react-redux';
import { createBoard, clearErrors } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_action';


class CreateBoard extends React.Component {
    constructor(props) {
        super(props)  
        this.state ={title: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.title.trim().length === 0) return null;
        this.props.createBoard(this.state).then(() => { this.props.closeModal()})
    }


    handleChange(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    componentWillUnmount() {
        this.props.clearErrors();
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
        return (
        <div className="create-board-modal">
            <form onSubmit={this.handleSubmit} className="create-board-form">
                {this.showErrors()}
                <div className="close-x"><div onClick={this.props.closeModal} >x</div></div>
                <input type="text"
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                    placeholder="Add board title"
                /> 
                {this.state.title.trim().length === 0 ? <button  className="incomplete-btn">Create Board</button> 
                : <button type="submit" className="completed-btn">Create Board</button> }           
            </form>
        </div>
        )
    }
}        

const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.board
    };
};

const mdtp = dispatch => {
    return {
        createBoard: (board) => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    };
};

export default connect(mstp, mdtp)(CreateBoard);