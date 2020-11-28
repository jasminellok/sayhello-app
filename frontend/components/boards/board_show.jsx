import React from 'react';
import EditModal from "../modal/edit-modal";
import ListIndexContainer from '../lists/list_index_container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const angleDown = <FontAwesomeIcon icon={faAngleDown} />

// <|title | team name icon | invite >         <| BONUS: calendar | menu to edit and delete |>


class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId) 
    }

    componentDidUpdate(prevProps) {
        if (this.props.boardId !== prevProps.boardId) {
            this.props.fetchBoard(this.props.boardId)
        }
    }

    handleDelete(id) {
        this.props.deleteBoard(id)
        .then(() => this.props.history.push('/boards'));
    }

    render() { 
        if (!this.props.board) return null;
        

        return (<>
            <div className="board-show-page" >
                <div className="board-show-bar">
                    <section className="board-show-left">
                        <li className="edit-board-button" onClick={() => this.props.openModal('editBoard')}> 
                            Board {angleDown}
                        </li>
                        <div className="show-title">{this.props.board.title}</div>
                        {/* <li onClick={() => this.handleDelete(this.props.board.id)}>Delete</li> */}
                        <div className="edit-modal-cont">
                            <EditModal board={this.props.board} />
                        </div>
                    </section>
                    <section className="board-show-right">
                        <li className="divider"></li>
                        <li> Team Icon </li>
                        <li> Invite </li>
                        <li> Calendar </li>
                    </section>
                </div>

                <div className="all-lists-container">
                    <ListIndexContainer 
                        boardId={this.props.boardId}
                        listIds={this.props.listIds}
                        />
                </div>
            </div>
        </>)
    }
}

export default BoardShow;