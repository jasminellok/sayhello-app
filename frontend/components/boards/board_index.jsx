import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexItem from './board_index_item';
import Modal from "../modal";

//need modals to create

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
            <h3>Personal Boards</h3>

            <Modal />

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

