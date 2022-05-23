import  React, { useState } from 'react'



function SearchList(props) {
   
    const click = (e) => {
        // console.log(e.target.value);
        props.setInputText(e);
        props.setclose(false)
        
        // this.props.handlePractice(e.target.value);
    }

    let products = JSON.parse(localStorage.getItem("products"));
    //create a new array by filtering the original array
    const filteredData = products.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return null;
        }
        //return the item which contains the user input
        else {
            return el.type.toLowerCase().includes(props.input)
        }
    })
    
    return (
        <>
        {props.close&&(<ul style={{position: "absolute",listStyleType: "none",background: "white",width: '25.5ch',}}>
            {filteredData.map((item) => (
                <li key={item.id} onClick={()=>click(item.type)} >{item.type}</li>
            ))}
        </ul>)}
        </>
    )
            
}

export default SearchList