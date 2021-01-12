//
import React from 'react';
import { connect } from 'react-redux';
import { updateCard, fetchCard, clearErrors } from '../../actions/card_actions';
import { closeModal } from '../../actions/modal_action';
import CommentIndex from "../comments/comment-index-container"


class EditCard extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.card.id,
            title: this.props.card.title,
            description: (this.props.card.description ? this.props.card.description : ""),
            deadline: (this.props.card.deadline ? this.props.card.deadline : ""), //edit date
            list_id: this.props.card.listId,
            ord: this.props.card.ord,
            dueDateOpen: "none"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateCard(this.state)
        this.setState({dueDateOpen: "none"})
    }

    handleChange(field) {
        return e => {
            e.preventDefault()
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleDueDateClick(e) {
        e.preventDefault();
        if (this.state.dueDateOpen === "") {
            this.setState({dueDateOpen: "none"})
        } else if ((this.state.dueDateOpen === "none")) {
            this.setState({dueDateOpen: ""})
        }
        
    }

    // componentWillUnmount() {
    //     this.props.clearErrors();
    // }

    // showErrors() {
    //     const liErrors = this.props.errors.map((error, i) => {
    //         return (<li key={`edit-card-errors${i}`}>{error}</li>)
    //     })
    //     return (
    //         <ul className="edit-card-errors">{liErrors}</ul>
    //     );
    // }


    render() {
        if (!this.state) return null;
        let dateTime;
        if (this.state.deadline.length>0) {
            let dateArr = this.state.deadline.split("-")
            let month = dateArr[1];
            let date = dateArr[2].slice(0,2);
            let year = dateArr[0];
            dateTime = `${month} ${date}, ${year}`
        }

        let showDate = <div className="edit-card-duedate">
                    <h3>DUE DATE</h3>
                    <h3 className="duedate">{new Date(dateTime).toDateString()} </h3>        
                </div>

        return (
            <div className="edit-card-container">
                <form className="edit-card-form">
                    <section className="edit-card-title">
                        <input type="text" 
                            className="edit-card-title"
                            value={this.state.title}
                            onChange={this.handleChange("title")} 
                            placeholder={this.state.title}
                            onBlur={this.handleSubmit}
                            onSubmit={this.handleSubmit}/>
                        <div onClick={this.props.closeModal} className="edit-card-closex">x</div>
                    </section>

                    <div className="card-edit-form-info">
                        <section className="edit-card-descp">
                            {dateTime ? showDate : null}
                            <div className="edit-card-description"> Description </div>
                            <textarea row="5"
                                value={this.state.description}
                                onChange={this.handleChange("description")} 
                                onBlur={this.handleSubmit}/>
                        </section>

                        <section className="edit-card-deadline">
                            <h2 className="deadline-title">ADD TO CARD</h2>
                            <div className="edit-card-deadline"> 
                                
                                <h4 className="add-to-card-label" onClick={(e) => this.handleDueDateClick(e)}>Due Date</h4>
                                <div style={{display:`${this.state.dueDateOpen}`}} className="card-deadline-form">
                                    <div><p className="change-dd">Change Due Date</p> 
                                    <h4 onClick={(e) => this.handleDueDateClick(e)}>x</h4></div>

                                    <input type="date" 
                                    onChange={this.handleChange("deadline")} 
                                    onBlur={this.handleSubmit}/>
                                </div>
                            </div>
                        </section>
                    </div>
                </form>
                
                <section className="card-comment-index-ctn">
                    <div className="comment-headr">Comments</div>
                    <CommentIndex cardId={this.props.card.id}/>
                </section>
            
            </div>
        );
    }
}

const mstp = (state, props) => {
    return {
        errors: state.errors.card,
        card: props.card
    }
}

const mdtp = dispatch => {
    return {
        fetchCard: (id) => dispatch(fetchCard(id)),
        updateCard: (card) => dispatch(updateCard(card)),
        closeModal: () => dispatch(closeModal()),
        deleteCard: (card) => dispatch(deleteCard(card.id)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
}

export default connect(mstp, mdtp)(EditCard);