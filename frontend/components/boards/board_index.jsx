import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexItem from './board_index_item';

//need modals to create

class BoardIndex extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllBoards();
    }

    render () {
        const boards = this.props.boards;

        const boardItems = boards.map(board => {
            return (<BoardIndexItem board={board} key={board.id}/>)
        });

        return (<div>
            <ul>
                <li><Link className="board-index-link" to="/boards">Boards</Link></li>
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

