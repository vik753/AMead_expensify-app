import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <span><NavLink to="/" activeClassName="is-active" exact={true} >Dashboard</NavLink> / </span>
        <span><NavLink to="/create" activeClassName="is-active" >Create expense</NavLink> / </span>
        <span><NavLink to="/help" activeClassName="is-active" >Help</NavLink> / </span>
    </div>
);

export { Header }