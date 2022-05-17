import { Button } from 'bootstrap'
import React from 'react'
import { stockData } from './stockData'
import ComplexGrid from './ShopItem'

export const Home = (user) => {
    const click = (event) => {
        console.log(event.target.value)
    }
    // console.log(user)
    return (
        <>
        <ComplexGrid {...user}/>
        </>
        // <>
        //   <div className="stock-container">
        //     {stockData.map((data, key) => {
        //       return (
        //         <div key={key}>
                    
        //           {data.type +
        //             " , " +
        //             data.ticker +
        //             " ," +
        //             data.stockPrice +
        //             ", " +
        //             data.timeElapsed}
        //         </div>
        //       );
        //     })}
        //   </div>
        // </>
    )
}
