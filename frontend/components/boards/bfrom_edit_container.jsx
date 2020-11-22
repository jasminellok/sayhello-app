//
import React from 'react';
import { connect } from 'react-redux';
import EditBoardForm from './board_edit_form';
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
    };

    render() {
        const { updateBoard, errors, clearErrors } = this.props;
        if (!this.state) return null;
        return (<div className="edit-board-container">
            <div className="close-x">
                <div onClick={this.props.closeModal} >x</div>
            </div>
            <EditBoardForm
                updateBoard={updateBoard}
                board={this.state}
                errors={errors}
                clearErrors={clearErrors}
            />
        </div>);
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












// import React from 'react';
// import { connect } from 'react-redux';
// import { updateBoard, fetchBoard } from '../../actions/board_actions';

// class UpdateBoard extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = this.props.board
//         this.handleSubmit = this.handleSubmit.bind(this);
//     };

//     componentDidMount() {
//         this.props.fetchBoard(this.props.board.id)
//         if (this.state.board.description === null) {
//             this
//         }
//     }

//     handleChange(field) {
//         return (e) => this.setState({ [field]: e.currentTarget.value });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.updateBoard(this.state)
//     }

//     showErrors() {
//         const liErrors = this.props.errors.map((error, i) => {
//             return (<li key={`edit-board-errors${i}`}>{error}</li>)
//         })
//         return (
//             <ul className="edit-board-errors">{liErrors}</ul>
//         );
//     }

//     render() {
//         if (!this.state) return null;
//         return (
//             <form onSubmit={this.handleSubmit} className="edit-board-form">
//                 {this.showErrors()}
//                 <label> Title:
//                     <input type="text"
//                         value={this.props.board.title}
//                         onChange={this.handleChange('title')}
//                     /> 
//                 </label>

//                 <label>Description:
//                 <textarea
//                     value={this.props.board.description}
//                     onChange={this.handleChange('description')}
//                 /> 
//                 </label>

//                 <button type="submit">Edit Board</button>
//             </form>
//         )
//     }
// }

// const mstp = (state, ownProps) => {
//     // debugger;
//     // const boards = state.entities.boards;
//     // const id = ownProps.match.params.boardId;
//     return {
//         currentUser: state.entities.users[state.session.id],
//         errors: state.errors.board,
//         // board: boards[id]
//     };
// };

// const mdtp = dispatch => {
//     return {
//         fetchBoard: (id) => dispatch(fetchBoard(id)),
//         updateBoard: (board) => dispatch(updateBoard(board))
//     };
// };

// export default connect(mstp, mdtp)(UpdateBoard);