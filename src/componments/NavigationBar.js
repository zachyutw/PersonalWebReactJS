/**
 * Created by po-yingyu on 2017-07-23.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from '../logo.svg';
import ZYLists from './ZYLists';

const NavigationBar = function ({brand,lists}) {

    return (
        <Navbar className="navigation">
            <Navbar.Header>
                <img src={logo} className="App-logo" alt="logo" />
                <Navbar.Brand>
                    <a id="logo" href="#">{brand}</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                    <ZYLists lists={lists} ul="Nav"/>
            </Navbar.Collapse>
        </Navbar>
    )
};

NavigationBar.protoTypes = {
    brand: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired
};
NavigationBar.defaultProps = {
    brand: "test",
    lists: [{text:"t1",url:"#"},{text:"t2",url:"#"},{text:"t3",url:"#"}]
};

export default  NavigationBar;
