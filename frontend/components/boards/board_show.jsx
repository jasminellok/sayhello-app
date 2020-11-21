import React from 'react';
import { Link } from 'react-router-dom';

// <|title | team name icon | invite >         <| BONUS: calendar | menu to edit and delete |>
//LATER: teams comp need joins, calendar (link to cal component), invite comp later
//NOW: edit on enter do i need form?, for delete do conditional logic to allow author delete + are you sure

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId);
    }

    handleChange(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        //console.log(this.props)
        if (!this.props.board) return null;

        return (<div className="board-show-page">
            <div className="board-show-bar">
                <section className="board-show-left">
                    <li> {this.props.board.title} 
                        <p>{this.props.board.description}</p>
                        {/* <p>EDIT DESCRIPTION ON ENTER</p> */}
                    </li>

                </section>

                <section className="board-show-right">
                    <li> Team Icon </li>
                    <li> Invite </li>
                    <li> Calendar </li>
                    <li onClick={() => this.props.deleteBoard}>Delete</li>
                </section>
            </div>
        </div>)
    }
}

export default BoardShow;