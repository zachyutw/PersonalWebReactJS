/**
 * Created by po-yingyu on 2017-08-01.
 */
import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ZYLists = function ({lists,ul}) {


    switch (ul){
        case "Nav":
            const navLists = lists.map(function (list,i) {
            if(list.url==null){list.url="#"}
            return (

                <NavItem eventKey={i+1} href={list.url}>{list.text}</NavItem>)


            });
            return <Nav>{navLists}</Nav>;
        default:
            const ulLists = lists.map(function (list,i) {
                if(list.url==null){
                    return <li key={i+1} href="#">{list}</li>
                }
                else {
                    return <li key={i + 1} href={list.url}>{list.text}</li>
                }
            });
            return <ul>{ulLists}</ul>;


    }

};

ZYLists.protoTypes = {
    lists: PropTypes.array.isRequired
};
ZYLists.defaultProps = {
    lists: [{text:"t1",url:"#"},{text:"t2",url:"#"},{text:"t3",url:"#"}]
};
export default ZYLists;