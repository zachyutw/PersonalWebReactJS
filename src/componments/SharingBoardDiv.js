/**
 * Created by po-yingyu on 2017-07-26.
 */
/**
 * Created by po-yingyu on 2017-07-25.
 */
/**
 * Created by po-yingyu on 2017-07-25.
 */
/**
 * Created by po-yingyu on 2017-07-24.
 */
/**
 * Created by po-yingyu on 2017-07-24.
 */
import React, { Component } from 'react';



function SharingBoardDiv(props)
{
    const factLists = props.content.myFacts.map(function (n,i) { return (<li key={i}>{n}</li>)});

    const langAndFrame = props.content.langsAndFrame;
    const frontend = langAndFrame.frontend.map(function (n,i) { return n+" "});
    const languages = langAndFrame.languages.map(function (n,i) { return n+" "});
    const backend = langAndFrame.backend.map(function (n,i) { return n+" "});
    const database = langAndFrame.database.map(function (n,i) { return n+" "});
    const cloud = langAndFrame.cloud.map(function (n,i) { return n+" "});
    const os = langAndFrame.os.map(function (n,i) { return n+" "});
    const skillList = function(){ return <ul><li>Languages:{" "+languages}</li><li>Front-End:{" "+frontend}</li><li>Back-End:{" "+backend}</li>
        <li>Dtabase:{" "+database}</li><li>Cloud:{" "+cloud}</li><li>OS:{" "+os}</li></ul>}

    return (
        <div id="SharingBoard">
            <h3 className="blue">Sharing Board</h3>
            <div className="sharingboards">
                <div className="sharingboradlist">
                  <ul>{factLists}</ul>
                </div>
                <div className="sharingboradlist">
                <ul>
                    {skillList()}

                </ul>
                </div>
                <div className="sharingboradlist">
                <ul>
                    <li>t</li>
                    <li>t</li>
                    <li>t</li>
                    <li>t</li>
                </ul>
                </div>

                </div>
        </div>
    )}

export default SharingBoardDiv;