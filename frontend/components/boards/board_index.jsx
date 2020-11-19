import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndex extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }
    
    render () {
        const user = () => (
            <section className="welcome-message">
                <p >{this.props.currentUser.full_name}, are you ready to see your boards????</p>
            </section>
        );

        return user();
    }
};


export default BoardIndex;

