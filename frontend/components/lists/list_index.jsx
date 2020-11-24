import React from 'react';
import { Link } from 'react-router-dom';
import EditListItem from './edit_list_item'
import CreateListItem from './create_list_item'
//import Modal from "../modal/modal";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
//const user = <FontAwesomeIcon icon={faUser} />

class ListIndex extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    } 

    componentDidMount() {
        this.props.fetchAllLists(this.props.match.params.boardId)
        .then( () => {
            let lists = getState().entities.lists;
            this.setState({lists})
        })

    }

    render () {
        // debugger;
        if (!this.state.lists) return null;
        const lists = this.state.lists;
        const { updateList, createList, deleteList} = this.props;
        const sortedList = Object.values(lists).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
        const nxtOrd = sortedList.length+1;
        const listItems = sortedList.map((list,i) => {
            return (<EditListItem key={`list-item${i}`} 
                    list={list} editList={updateList} deleteList={deleteList}
                    clearErrors={this.props.clearErrors}/>)
            });

        return (
        <div className="list-area">
            <section className="list-index-item">
                {listItems}
            </section>

            <section className="create-list-container">
                    <CreateListItem 
                        boardId={this.props.match.params.boardId} 
                        createList={createList} 
                        ord={nxtOrd}
                        clearErrors={this.props.clearErrors}/>
            </section>
            
        </div>)
    }

};


export default ListIndex;

