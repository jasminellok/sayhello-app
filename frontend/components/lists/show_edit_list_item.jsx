import React from 'react';
import CardIndexCont from "../cards/card-index-container"

class ShowListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.list // title ,ord, board_id
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(e) {
        e.preventDefault();
        this.props.editList(this.state)
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
        const list =this.props.list
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
                            <p onClick={() => this.handleDelete(this.props.list.id)}>Remove</p>
                        </div>
                    </form>
                </section>

                <section className="card-index-container">
                    <CardIndexCont listId={this.state.id}/>
                </section>
        </div>)
    }
}

export default ShowListItem;