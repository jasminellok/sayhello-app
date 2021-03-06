import React from 'react';
import { connect } from 'react-redux';
import { updateBoard, fetchBoard, clearErrors } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_action';


class EditBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.editBoard.id,
            title: this.props.editBoard.title,
            description: (this.props.editBoard.description ? this.props.editBoard.description : ""),
            author_id: this.props.editBoard.author_id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.title.trim().length === 0) return null;
        this.props.updateBoard(this.state)
        this.props.closeModal();
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

    componentDidUpdate(prevProps) {
        if (this.props.editBoard !== prevProps.editBoard) {
            const newState = {...this.props.editBoard}
            this.setState(newState)
        }
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
        //const { closeModal} = this.props;
        if (!this.state) return null;
        return (
            <div className="edit-board-container">
                <form onSubmit={this.handleSubmit} className="edit-board-form">

                    {this.showErrors()}

                    <section className="edit-board-title">
                        {/* <div onClick={this.props.closeModal} className="edit-board-closex">x</div> */}
                        <div className="edit-board-title">Title </div>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.handleChange("title")} />
                    </section>

                    <section className="edit-board-descp">
                        <div className="edit-board-description"> Description </div>
                        <textarea row="2"
                            value={this.state.description}
                            onChange={this.handleChange("description")} />
                    </section>

                    <section className="edit-board-submit">
                        <p></p>
                        <button className="edit-board-btn" >Make Changes!</button>
                    </section>
                </form>
            </div>
        );
    }
}

const mstp = (state, props) => {
    return {
        errors: state.errors.board,
        editBoard: props.editBoard
    }
}

const mdtp = dispatch => {
    return {
        fetchBoard: (id) => dispatch(fetchBoard(id)),
        updateBoard: (board) => dispatch(updateBoard(board)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
}

export default connect(mstp, mdtp)(EditBoard);