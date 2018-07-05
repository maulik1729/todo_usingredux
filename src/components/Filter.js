import React from 'react';
import {ALL,COMPLETED,ACTIVE} from "../constants/Filter";
import FilterButtonContainer from "../container/FilterButtonContainer";

const Filter = () =>{
        return (
            <div className="filter">
                <FilterButtonContainer  stateName={ALL}/>
                <FilterButtonContainer  stateName={ACTIVE}/>
                <FilterButtonContainer  stateName={COMPLETED}/>
            </div>
        );
}


export default Filter;