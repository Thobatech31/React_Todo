import React, { Component } from 'react';

class AddTodos extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <form style={{ display:flex }}>
                <input type="text" name="title" placeholder="Add todos ...." style={{flex: '10', padding: '10px'}}/>
                <input type="submit" value="submit" className="btn" style={{ flex: '1' }} />
            </form>
        );
    }
}

export default AddTodos;