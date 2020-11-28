//for list index container

// componentDidUpdate(prevProps) {
//     if (this.props.listIds) {
//         if (this.props.listIds !== prevProps.listIds) {
//             this.props.fetchAllLists(this.props.match.params.boardId)
//                 .then(() => {
//                     const lists = this.props.lists;
//                     const sortedList = Object.values(lists).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
//                     this.setState({ ordList: sortedList })
//                 })
//         }

//     }
// }

// orderedIds(lists) {
//     const idOrd = []; //ord list ordered so extract ids should be ordered, so index is ord
//     lists.forEach((list) => {
//         idOrd.push(list.id)
//     })
//     return idOrd;
// }

// onDragEnd(result) {
//     if (!result.destination) {
//         return;
//     }

//     if (result.source.index === result.destination.index) {
//         return
//     }

//     const startInd = result.source.index //say its 2
//     const endInd = result.destination.index //say its 3

//     if (result.type === "list-drop") {
//         const lists = this.orderedIds(this.state.ordList);// current ordid [1,2,3,4,5]
//         const [move] = lists.splice(startInd, 1); //take one ele from startindx
//         lists.splice(endInd, 0, move); //take that move ele and move to inputed end pos, [1, 2, 4, 3, 5]
//         const newState = getState().entities.lists;
//         const listNeedUpdate = []; //has lists that updated ord 
//         lists.forEach((id, ord) => {
//             if (newState[id].ord !== ord) {
//                 newState[id].ord = ord;
//                 listNeedUpdate.push(newState[id])
//             }
//         })
//         const sortedList = Object.values(newState).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
//         this.setState({ ordList: sortedList })
//         listNeedUpdate.forEach((list) => {
//             this.props.updateList(list)
//         })
//     }

//     // else if (result.type === "card-drop") {
//     //     this.setState({ cardUpdate: { id: result.draggableId, pos: [startInd, endInd]}})
//     // }
// }
{/* <DragDropContext onDragEnd={this.onDragEnd}>
    <Droppable droppableId={`listsInBoard-${boardId}`} type="list-drop" direction="horizontal">
        {(provided) => (
            <div className="list-items" ref={provided.innerRef} {...provided.droppableProps}>
                {showEditItem}
                {provided.placeholder}
            </div>
        )}
    </Droppable>
</DragDropContext> */}