import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import CardIndexCont from "../cards/card-index-container"
import { fetchList, deleteList, updateList, clearErrors } from '../../actions/list_actions';
import {Droppable, Draggable } from 'react-beautiful-dnd';

class ShowEditListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.list 
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateList(this.state)
        // window.location.reload();
    }

    componentDidUpdate(prevProps) {
        //if (this.props.list !== prevProps.list) {
        //    this.props.
        //}
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

    handleDelete() {
        this.props.deleteList(this.props.listId)
        // window.location.reload();
    }

    render () {
        const list = this.props.list
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
                    {/* <div className="list-edit-ord">
                        <input type="number"
                            value={this.state.ord}
                            onChange={this.handleChange('ord')}
                            placeholder="New Order"
                        />
                    </div> */}
                    {/* <button type="submit"> Submit </button> */}
                    <p onClick={() => this.handleDelete()}>x</p>
                </form>

                <section className="card-index-container">
                    <CardIndexCont listId={this.state.id}/>
                </section>
        </div>)
    }
}

const mstp = (state, props) => {
    // console.log("mstp state", state)
    // console.log("mstp props", props)
    return {
        currentUser: state.entities.users[state.session.id],
        list: props.list, 
        listId: props.list.id,
        listsOrd: Object.values(state.entities.lists).map((v)=>{return v.ord}),
        listIds: Object.keys(state.entities.lists)
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