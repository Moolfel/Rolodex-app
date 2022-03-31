import React from "react";
import './card-list.styles.css'


export const CardList = props =>{
    console.log(props);
    
    <div className='card-list'>
    {
        props.state.monsters.map(monster=> (
        <h1 key={monster.id}>{monster.name}</h1>))
    }
    
    </div>
    
}