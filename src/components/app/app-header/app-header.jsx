import React from "react";
import { Button } from 'reactstrap';


const AppHeader = ({totalItems, totalLike, totalImportant}) => {
    return (
        <div className='app-header d-flex'>
            <h2>Person name</h2>
            <h2>{totalItems} записей, понравилось: {totalLike}, важных: {totalImportant}</h2>
        </div>
    )
}

export default AppHeader;