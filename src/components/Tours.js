import React from 'react'
import Card from './Card';

const Tours = ({tours, removeTour}) => {
    return (
        <div className='container'>
            {/* heading */}
            <div>
                <h2 className='title'>Tourism Planner</h2>
            </div>

            {/* Mapping of card Values with the Tour Data */}
            <div className='cards'>
                {
                    tours.map((tour) => {
                        // return <Card t = {tour}/>
                        return <Card key={tour.id} {...tour} removeTour = {removeTour}/>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;