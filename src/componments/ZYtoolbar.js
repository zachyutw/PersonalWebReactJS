/**
 * Created by po-yingyu on 2017-07-17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Nav,NavItem} from 'react-bootstrap';

export class ZYtoolbar extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={

        }
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(selectedKey)
    {
        console.log('selected '+selectedKey);
    }

    render(){
        return (
        <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
            <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>);
    }

}

