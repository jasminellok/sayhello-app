import React from 'react';

class EditListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.list
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
        return (
        <div className="edit-list-container">
                <form onSubmit={this.handleSubmit} className="create-list-form">
                    {this.showErrors()}
                    <input type="text"
                        value={this.state.title}
                        onChange={this.handleChange('title')}
                        placeholder={this.state.title}
                    />
                    <p onClick={() => this.handleDelete(this.props.list.id)}>Remove</p>
                </form>
        </div>)
    }
}

export default EditListItem;