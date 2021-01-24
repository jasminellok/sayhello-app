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
            showShareForm: "", 
            addUserEmail:"",
        }
        this.submitBoardUser = this.submitBoardUser.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    submitBoardUser(e) {
        e.preventDefault();
        let userEmail = this.state.addUserEmail
        let boardId = this.props.boardId
        this.props.createBoardUser(boardId, userEmail).then(() => { 
            this.setState({addUserEmail:'Saved, board shared!'})
        })
        setTimeout(()=>{
            this.setState({addUserEmail:''}); 
        }, 2000);

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

        if (this.props.errors.length !== prevProps.errors.length) {
            this.setState({addUserEmail:'Error! Invalid email'})
            setTimeout(()=>{
                this.setState({addUserEmail:''}); 
            }, 2000);
            this.props.clearErrors();
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
                        <li onClick={() => this.props.openModal('editBoard')}> 
                            Board {angleDown}
                        </li>
                        <p className="show-title">{this.props.board.title}</p>
                        <li onClick={() => this.handleDelete(this.props.board.id)}>Delete</li>
                        <div className="edit-modal-cont">
                            <EditModal board={this.props.board} />
                        </div>
                    </section>

                    <section className="board-show-right">
                        <li className="divider"></li>
                        <div className="share-ctn" style={{display:`${this.state.showShareForm}`}}>
                            <form onSubmit={this.submitBoardUser} className="share-form">
                                <input type="text"
                                className= "share-input"
                                    value={this.state.addUserEmail}
                                    onChange={this.handleChange('addUserEmail')}
                                    placeholder= "Enter user's email to share board with them"
                                /> 
                                
                            </form>
                        </div>
                    </section>

                </div>

                <div className="all-lists-container">
                    <ListIndexContainer boardId={this.props.boardId}/>
                </div>
            </div>
        </>)
    }
}

export default BoardShow;