import React from 'react';
import { NavLink } from 'react-router-dom';

const ItensNav = props => {
    return (
        <NavLink activeStyle={{fontWeight: "bold"}} {...props} />
    )
}

export default ItensNav;