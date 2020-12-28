import { connect } from 'react-redux';
import { fetchAllBoards, createBoardUser, removeBoardUser } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_action';
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from "../modal/modal";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
//const user = <FontAwesomeIcon icon={faUser} />

const BoardIndexItem = props => {
    return (<li>
        <Link to={`/boards/${props.board.id}`}>{props.board.title}</Link>
    </li>)
}

class BoardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllBoards();
    }

    render() {
        const boards = this.props.boards;
        const boardItems = boards.map((board, i) => {
            return (<BoardIndexItem board={board} key={`board-index-item${i}`} />)
        });
        return (<div className="board-index-page">
            <Modal />
            <h3>Personal Boards
                {/* <div className="user-icon">{user}</div> */}
            </h3>
            <ul className="board-index">
                {boardItems}
                <li className="index-create-modal" onClick={() => this.props.openModal('createBoard')}>
                    <p>Create Board</p>
                </li>
            </ul>
        </div>)
    }

};

const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards)
    };
};

const mdtp = dispatch => {
    return {
        fetchAllBoards: () => dispatch(fetchAllBoards()),
        createBoardUser: (id) => dispatch(createBoardUser(id)),
        removeBoardUser: (id) => dispatch(removeBoardUser(id)),
        openModal: (modal) => dispatch(openModal(modal))
    }
};


export default connect(mstp, mdtp)(BoardIndex);


