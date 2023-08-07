import React from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const {category} = useParams()

        return (
            <div className='saludo'>
                <h2>{greeting}</h2>
            </div>
        )


}

export default ItemListContainer