import React from 'react';
import EditModal from "../modal/edit-modal";
import ListIndexContainer from '../lists/list_index_container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const angleDown = <FontAwesomeIcon icon={faAngleDown} />


class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showShareForm: "", //change to none and add onClick if want to toggle
            email:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let userEmail = this.state.email
        let boardId = this.props.boardId
        this.props.createBoardUser(boardId, userEmail)
        // this.props.createBoardUser(boardId, userEmail).then((board) => { 
        //     this.setState({
        //         email:"",
        //         showShareForm:"none"
        //     })
        // });
        
    }

    handleClick(e) {
        if (this.state.showShareForm === "none"){
            this.setState({showShareForm:""})
        } else if (this.state.showShareForm === "") {
            this.setState({showShareForm:"none"})
        }
        
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
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
            <div className="board-show-page">
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
                        <div className="share-ctn" style={{display:`${this.state.showShareForm}`}}>
                            <form onSubmit={this.handleSubmit} className="share-form">
                                <input type="text"
                                className= "share-input"
                                    value={this.state.email}
                                    onChange={this.handleChange('email')}
                                    placeholder="Enter email to share board"
                                /> 
                                {/* <button type="submit">Share Board</button> */}
                            </form>
                        </div>
                    </section>
                </div>

                <div className="all-lists-container">
                    <ListIndexContainer 
                        boardId={this.props.boardId}
                        />
                </div>
            </div>
        </>)
    }
}

export default BoardShow;