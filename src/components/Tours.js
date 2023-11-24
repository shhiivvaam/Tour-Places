import React from 'react'
import Card from './Card';

const Tours = ({tours, removeTour}) => {
    return (
        <div>
            {/* heading */}
            <div>
                <h2>Tourism Planner</h2>
            </div>

            {/* Mapping of card Values with the Tour Data */}
            <div>
                {
                    tours.map((tour) => {
                        // return <Card t = {tour}/>
                        return <Card {...tour} removeTour = {removeTour}/>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;