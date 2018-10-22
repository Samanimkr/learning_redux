import React, { Component } from "react";

export class AddForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            postTitle: '',
            postBody: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        var name = e.target.name;
        if (e.target.name === 'title') {
            this.setState({postTitle: e.target.value});
        } else if (e.target.name === 'body'){
            this.setState({postBody: e.target.value});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(e.target.value);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>New Post</h3>
                <ul>
                    <li>
                        <label>Title:</label>
                        <input type='text' name='title' onChange={this.handleChange}/>
                    </li>
                    <li>
                        <label>Body:</label>
                        <input type='text' name='body' onChange={this.handleChange}/>
                    </li>
                </ul>
               

            </form>
        )
    }
}