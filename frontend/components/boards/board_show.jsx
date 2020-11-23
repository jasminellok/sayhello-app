import React from 'react';
import { Redirect, Link } from 'react-router-dom';
// UpdateBoardContainer from "./bfrom_edit_container";
import EditModal from "../modal/edit-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const angleDown = <FontAwesomeIcon icon={faAngleDown} />

// <|title | team name icon | invite >         <| BONUS: calendar | menu to edit and delete |>
//LATER: teams comp need joins, calendar (link to cal component), invite comp later
//NOW: edit on enter do i need form?, for delete do conditional logic to allow author delete + are you sure

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId) 
    }

    handleChange(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value })
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

                <div className="list-items">

                </div>
            </div>
        </>)
    }
}

export default BoardShow;