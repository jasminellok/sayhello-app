import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexItem from './board_index_item';

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
            <div>{this.props.currentUser.full_name}:</div>
            <ul>
                {/* <li><Link className="board-index-link" to="/boards">Boards</Link></li> */}
                <li>modal to create form</li> 
            </ul>

            <ul>
                {boardItems}
            </ul>

            <div>
                <p>modal to create form</p>
            </div>
        </div>)
    }

};


export default BoardIndex;

