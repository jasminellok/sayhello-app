import { connect } from 'react-redux';
import { fetchAllLists, deleteList, createList, updateList, clearErrors } from '../../actions/list_actions';
import { withRouter } from "react-router";
import React from 'react';
import ShowEditListItem from './show_edit_list_item'
import CreateListItem from './create_list_item'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
// const list = [...this.state.ordList]; //copy
// const move = result.splice(startInd, 1); //take one ele from startindx
// list.splice(endInd, 0, move); //take that move ele and move to inputed end pos
// this.setState({ ordList: lists });

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            ordList: [],
            //cardUpdate: {} //{id:result.draggableId, pos:[result.source.index, result.destination.indexend]}
        }
        this.onDragEnd = this.onDragEnd.bind(this);
        this.listItems = this.listItems.bind(this);
        this.createList = this.createList.bind(this);
        this.orderedIds = this.orderedIds.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllLists(this.props.match.params.boardId)
            .then(() => {
                const lists = this.props.lists;
                const sortedList = Object.values(lists).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
                this.setState({ ordList: sortedList })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.listIds){
            if (this.props.listIds !== prevProps.listIds) {
                this.props.fetchAllLists(this.props.match.params.boardId)
                .then ( () => {
                    const lists = this.props.lists;
                    const sortedList = Object.values(lists).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
                    this.setState({ ordList: sortedList })
                })
            }

        }
    }

    orderedIds(lists) {
        const idOrd = []; //ord list ordered so extract ids should be ordered, so index is ord
        lists.forEach ((list) => {
            idOrd.push(list.id)
        })
        return idOrd;
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        if (result.source.index === result.destination.index) {
            return 
        }

        const startInd = result.source.index //say its 2
        const endInd = result.destination.index //say its 3

        if (result.type === "list-drop") {
            const lists = this.orderedIds(this.state.ordList);// current ordid [1,2,3,4,5]
            const [move] = lists.splice(startInd, 1); //take one ele from startindx
            lists.splice(endInd, 0, move); //take that move ele and move to inputed end pos, [1, 2, 4, 3, 5]
            const newState = getState().entities.lists;
            const listNeedUpdate = []; //has lists that updated ord 
            lists.forEach((id, ord) => { 
                if (newState[id].ord !== ord) {
                    newState[id].ord = ord;
                    listNeedUpdate.push(newState[id])
                }
            })
            const sortedList = Object.values(newState).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
            this.setState({ ordList: sortedList })
            listNeedUpdate.forEach((list) => {
                this.props.updateList(list)
            })
        } 
        
        // else if (result.type === "card-drop") {
        //     this.setState({ cardUpdate: { id: result.draggableId, pos: [startInd, endInd]}})
        // }
    }

    listItems() {
        const listInBoard = this.state.ordList.map((list, i) => {
            return (<ShowEditListItem key={`list-item${i}`}
                list={list}/>)
        })

        return listInBoard;
    }

    createList () {
        const { createList} = this.props;
        const orderedList = this.state.ordList;
        const createNxtOrd = orderedList.length + 1;
        return (<CreateListItem
            boardId={this.props.match.params.boardId}
            ord={createNxtOrd} />)
    }


    render() {
        if (this.state.ordList.length<1) return null;
        const showEditItem = this.listItems();
        const createList = this.createList();
        const boardId = this.props.match.params.boardId;
        // debugger;
        return (
            <div className="list-area">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId={`listsInBoard-${boardId}`} type="list-drop" direction="horizontal">
                        {(provided) => (
                            <div className="list-items" ref={provided.innerRef} {...provided.droppableProps}>
                                {showEditItem}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                <section className="create-list-container">
                    {createList}
                </section>

            </div>)
    }

};



const mstp = (state, props) => {
    return {
        currentUser: state.entities.users[state.session.id],
        listIds: props.listIds,
        boardId: props.board.id,
        lists: state.entities.lists
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
