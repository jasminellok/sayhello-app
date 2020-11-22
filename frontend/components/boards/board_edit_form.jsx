import React from 'react';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state)
        window.location.reload();
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
        const liErrors = this.props.errors.map((error, i) => {
            return (<li key={`edit-board-errors${i}`}>{error}</li>)
        })
        return (
            <ul className="edit-board-errors">{liErrors}</ul>
        );
    }

    render() {
        // debugger;
        return (<>
            <form onSubmit={this.handleSubmit}>
                {this.showErrors()}
                <h1>Edit Board</h1>
                <label>Title
                    <input type="text"
                            value={this.state.title}
                            onChange={this.handleChange("title")} />
                </label>
                <label>Description
                    <textarea
                            value={this.state.description}
                            onChange={this.handleChange("description")} />
                </label>
                <button>Submit</button>
            </form>
        </>)
    }
}


export default EditBoardForm;


