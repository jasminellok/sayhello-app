import React from 'react';
import { withRouter } from "react-router";

class CreateList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            title: "",
            ord: this.props.ord,
            board_id: this.props.boardId 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createList(this.props.boardId,this.state)
        window.location.reload();
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    showErrors() {
        const errors = getState().errors.list;
        const liErrors = errors.map((error, i) => {
            return (<li key={`create-list-errors${i}`}>{error}</li>)
        })
        return (
            <ul className="create-list-errors">{liErrors}</ul>
        );
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit} className="create-list-form">
                    {this.showErrors()}
                    <input type="text"
                        value={this.state.title}
                        onChange={this.handleChange('title')}
                        placeholder="Add List Name"
                    />
                    <button type="submit"> + </button>
                </form>
        )
    }
}  

export default withRouter(CreateList);