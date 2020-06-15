import React from 'react';

function toDoList(props) {

        return (
            <div className="to-do-item">
                <h1>{props.info.header}</h1>
                <input 
                    type="checkbox" 
                    onChange = {() => props.clickChange(props.info.id)} 
                    checked={props.info.checked} 
                    
                />

                <p>{props.info.paragraph}</p>
            </div>
        );
    }
    

export default toDoList;