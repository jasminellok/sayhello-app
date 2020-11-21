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

        return (<div>
            <Modal />

            <div>{this.props.currentUser.full_name}:</div>

            <div>
                <button onClick={() => this.props.openModal('createBoard')}>Create Board</button>
            </div>

            <ul>
                {boardItems}
            </ul>

            <div>
            </div>
        </div>)
    }

};


export default BoardIndex;

