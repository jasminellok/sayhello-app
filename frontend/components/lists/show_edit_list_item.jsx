import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import CardIndexCont from "../cards/card-index-container"
import { fetchList, fetchAllLists, deleteList, updateList, clearErrors } from '../../actions/list_actions';
//import {Droppable, Draggable } from 'react-beautiful-dnd';

class ShowEditListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.list 
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.title.trim().length === 0) this.state.title =  this.props.list.title;
        this.props.updateList(this.state)
    }

    componentDidUpdate(prevProps) {
        if (this.props.list !== prevProps.list) {
            const newState = {...this.props.list}
            this.setState(newState)
        }
    }

    handleChange(field) {
        return e => {
            e.preventDefault()
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }


    showErrors() {
        const errors = this.props.errors;
        const liErrors = errors.map((error, i) => {
            return (<li key={`edit-list-errors${i}`}>{error}</li>)
        })
        return (
            <ul className="edit-list-errors">{liErrors}</ul>
        );
    }

    handleDelete(id) {
        this.props.deleteList(id)
    }

    render () {
        return ( <div className="list-show">
                {this.showErrors()} 
                <form onSubmit={this.handleSubmit} className="edit-list-form">
                    <div className="list-edit-title">
                        <input type="text"
                            value={this.state.title}
                            onChange={this.handleChange('title')}
                            placeholder={this.state.title}
                        />
                    </div>
                    <p onClick={() => this.handleDelete(this.state.id)}>x</p>
                </form>

                <section className="card-index-container">
                    <CardIndexCont listId={this.props.listId}/>
                </section>
        </div>)
    }
}


const mstp = (state, props) => {
    return {
        currentUser: state.entities.users[state.session.id],
        list: props.list, 
        listId: props.list.id,
        errors: state.errors.list
    };
};

const mdtp = dispatch => {
    return {
        fetchAllLists: (boardId) => dispatch(fetchAllLists(boardId)),
        fetchList: (listId) => dispatch(fetchList(listId)),
        deleteList: (listId) => dispatch(deleteList(listId)),
        updateList: (list) => dispatch(updateList(list)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
};

export default withRouter(connect(mstp, mdtp)(ShowEditListItem));