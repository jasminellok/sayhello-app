import { connect } from 'react-redux';
import { fetchAllLists, deleteList, createList, updateList, clearErrors } from '../../actions/list_actions';
import { withRouter } from "react-router";
import React from 'react';
import ShowEditListItem from './show_edit_list_item'
import CreateListItem from './create_list_item'
//import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


class ListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            ordList: [],
        }
        this.listItems = this.listItems.bind(this);
        this.createList = this.createList.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllLists(this.props.match.params.boardId)
            .then(() => {
                const lists = this.props.lists;
                const sortedList = Object.values(lists).sort((a, b) => (a.id > b.id) ? 1 : -1);
                this.setState({ ordList: sortedList })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.listIds !== prevProps.listIds) {
            const lists = this.props.lists;
            const sortedList = Object.values(lists).sort((a, b) => (a.id > b.id) ? 1 : -1);
            this.setState({ ordList: sortedList })
        }
    }

    listItems() {
        const listInBoard = this.state.ordList.map((list, i) => {
            return (<ShowEditListItem key={`list-item${i}`}
                list={list}/>)
        })

        return listInBoard;
    }

    createList () {
        const orderedList = this.state.ordList;
        const createNxtOrd = orderedList.length + 1;
        return (<CreateListItem
            boardId={this.props.match.params.boardId}
            ord={createNxtOrd} />)
    }


    render() {
        const showEditItem = this.listItems();
        const createList = this.createList();
        return (
            <div className="list-area">
                <div className="list-items">
                    {showEditItem}
                </div>

                <section className="create-list-container">
                    {createList}
                </section>

            </div>)
    }

};


const mstp = (state, props) => {
    return {
        currentUser: state.entities.users[state.session.id],
        boardId: props.boardId,
        lists: state.entities.lists,
        listIds: Object.keys(state.entities.lists)
    };
};

const mdtp = dispatch => {
    return {
        fetchAllLists: (boardId) => dispatch(fetchAllLists(boardId)),
        createList: (boardId, list) => dispatch(createList(boardId, list)),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
};


export default withRouter(connect(mstp, mdtp)(ListIndex));


