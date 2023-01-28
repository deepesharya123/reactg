import React from 'react'
import Person from './Person';

function NameList() {
    const persons = [
        {
            id:1,
            name:"Bruce",
            age:30,
            skill:"React"
        },{
            id:2,
            name:"Clark",
            age:25,
            skill:"Angular"
        },{
            id:3,
            name:"Diana",
            age:28,
            skill:"Vue"
        },
    ]
    const personList = persons.map(person => (
        <Person key={person.id} person={person}/>
    ))
    
    const names =  ["Bruce","Clark","Diana","Bruce"];
    const nameList = names.map((name,index) => 
        <h1 key={index}>{index} {name}</h1>
    );
    
    return (
    <div>
        {nameList}

        {/* {personList} */}

        {/* {
            names.map(name => <h1>{name}</h1>)
        } */}

    </div>
  )
}

export default NameList