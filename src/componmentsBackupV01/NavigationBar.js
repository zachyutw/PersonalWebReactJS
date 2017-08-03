/**
 * Created by po-yingyu on 2017-07-23.
 */
import React, { Component } from 'react';


export class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            brand: "",
            navListC: [],
            obj: {}
        }
        this.loadData= this.loadData.bind(this);
    }
    loadData(){
        this.setState(
            {
                brand:content.navigationBar.brand,
                navListC: content.navigationBar.naviLists,
                obj: content.navigationBar.navObjs
            });
    }
    componentDidMount()
    {
        this.loadData();
    }
    render(){
        const navList = this.state.navListC.map(
            function (list,i) {
                const url = Object.keys(list).map(function (key) { return list[key];});
                return <NavItem eventKey={i+1} href={url.toString()}>{Object.keys(list)}</NavItem>

            }
        );
        return (
            <Navbar collapseOnSelect className="navigation">
                <Navbar.Header>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Navbar.Brand>

                        <a id="logo" href="#">{
                            this.state.brand
                        }</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {navList}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }


}



export default  NavigationBar;
