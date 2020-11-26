import { connect } from 'react-redux';
import { fetchAllLists, deleteList, createList, updateList, clearErrors } from '../../actions/list_actions';
import { withRouter } from "react-router";
import React from 'react';
import ShowEditListItem from './show_edit_list_item'
import CreateListItem from './create_list_item'

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

//import Modal from "../modal/modal";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
//const user = <FontAwesomeIcon icon={faUser} />
//import { openModal } from '../../actions/modal_action';
//Object.values(lists).sort((a,b) => (a.ord>b.ord) ? 1 : -1)

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            ordList: []
        }
        this.orderList = this.orderList.bind(this);
    }

    componentDidMount() {
        // debugger;
        this.props.fetchAllLists(this.props.match.params.boardId)
            .then(() => {
                this.orderList()
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.listIds.length !== prevProps.listIds.length) {
            this.props.fetchAllLists(this.props.match.params.boardId)
            .then ( () => {
                this.orderList();
            })
        }
    }

    orderList() {
        const lists = this.props.lists;
        const sortedList = Object.values(lists).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
        this.setState({ ordList: sortedList })
    }


    render() {
        if (this.state.ordList.length<1) return null;
        const { updateList, createList, deleteList } = this.props;
        const orderedList = this.state.ordList;
        const createNxtOrd = orderedList.length + 1;

        const listItems = orderedList.map((list, i) => {
            return (<ShowEditListItem key={`list-item${i}`}
                list={list} editList={updateList} deleteList={deleteList}
                clearErrors={this.props.clearErrors} />)
        });

        return (
            <div className="list-area">
                <section className="list-index-items">
                    <DragDropContext onDragEnd={result => console.log(result)}>
                        {listItems}
                    </DragDropContext>
                </section>

                <section className="create-list-container">
                    <CreateListItem
                        boardId={this.props.match.params.boardId}
                        createList={createList}
                        ord={createNxtOrd}
                        clearErrors={this.props.clearErrors} />
                </section>

            </div>)
    }

};



const mstp = (state, ownProps) => {
    const boards = state.entities.boards
    const id = ownProps.match.params.boardId
    //debugger;
    return {
        currentUser: state.entities.users[state.session.id],
        listIds: boards[id] ? boards[id].listIds : [],
        lists: state.entities.lists
    };
};

const mdtp = dispatch => {
    return {
        fetchAllLists: (boardId) => dispatch(fetchAllLists(boardId)),
        deleteList: (listId) => dispatch(deleteList(listId)),
        createList: (boardId, list) => dispatch(createList(boardId, list)),
        updateList: (list) => dispatch(updateList(list)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
};


export default withRouter(connect(mstp, mdtp)(ListIndex));
