import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import CardIndexCont from "../cards/card-index-container"
import { fetchList, deleteList, updateList, clearErrors } from '../../actions/list_actions';
import {Droppable, Draggable } from 'react-beautiful-dnd';

class ShowEditListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.list // title ,ord, board_id
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateList(this.state)
        // window.location.reload();
    }

    componentDidUpdate(prevProps) {
        if (this.props.listIds.length !== prevProps.listIds.length) {
            this.props.fetchAllLists(this.props.match.params.boardId)
                .then(() => {
                    const lists = this.props.lists;
                    const sortedList = Object.values(lists).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
                    this.setState({ ordList: sortedList })
                })
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
        const errors = getState().errors.list;
        const liErrors = errors.map((error, i) => {
            return (<li key={`edit-list-errors${i}`}>{error}</li>)
        })
        return (
            <ul className="edit-list-errors">{liErrors}</ul>
        );
    }

    handleDelete(id) {
        this.props.deleteList(id)
        window.location.reload();
    }

    render () {
        const list = this.props.list
        return ( <div className="list-show">
            <section className="edit-list-container">
                    <form onSubmit={this.handleSubmit} className="create-list-form">
                        {this.showErrors()}
                        <div className="list-edit-form-spec">
                            <input type="text"
                                value={this.state.title}
                                onChange={this.handleChange('title')}
                                placeholder={this.state.title}
                            />
                            <p onClick={() => this.handleDelete(this.props.list.id)}>-</p>
                        </div>
                    </form>
                </section>

                <section className="card-index-container">
                    <CardIndexCont listId={this.state.id}/>
                </section>
        </div>)
    }
}

const mstp = (state, props) => {
    //debugger;
    return {
        currentUser: state.entities.users[state.session.id],
        list: props.list
    };
};

const mdtp = dispatch => {
    return {
        fetchList: (listId) => dispatch(fetchList(listId)),
        deleteList: (listId) => dispatch(deleteList(listId)),
        updateList: (list) => dispatch(updateList(list)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
};

export default withRouter(connect(mstp, mdtp)(ShowEditListItem));