/**
 * Created by po-yingyu on 2017-07-23.
 */
import React, { Component } from 'react';


function NavigationBar (props){
    const lists = props.lists;
    const username = props.username;
    const listItems = lists.map(
        function(list){

                if(list.search(username)>-1)
                {
                    return <li id="logo" key={list.toString()} >{list}
                    </li>
                }
                else if(list.search("Home") > -1)
                {
                    return <li key={list.toString()}><a href="../public/index.html">{list}</a></li>
                }
                else if(list.search("About") > -1)
                {
                    return <li key={list.toString()}><a href="#cover">{list}</a></li>
                }
                else
                {
                 return <li key={list.toString()}>{list}</li>
                }
            });



    //const listItems = <li> {naviLists[0]}</li>;
    return (
        <div className="navigation">
            <ul>
                {listItems}
            </ul>
        </div>
    );
}


export default  NavigationBar;
