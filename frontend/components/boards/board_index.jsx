import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexItem from './board_index_item';
import Modal from "../modal/modal";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

//need modals to create

//const user = <FontAwesomeIcon icon={faUser} />

class BoardIndex extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllBoards();
    }

    render () {
        const boards = this.props.boards;

        const boardItems = boards.map((board, i) => {
            return (<BoardIndexItem board={board} key={`board-index-item${i}`}/>)
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


export default BoardIndex;

