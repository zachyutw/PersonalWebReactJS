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
    const tools = props.content.tools;
    const tool = tools.map(function (n,i) { return <li key={i}>{n+" "}</li>

    })
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
                    {tool}
                </ul>
                </div>

                </div>
        </div>
    )}

export default SharingBoardDiv;

export class SharingDiv extends Component{
    constructor(props){
        super(props);
        this.state={
            title: Object.keys(content.sharing),
            myFacts: content.sharing.myFacts,
            langsAndFrame: content.sharing.langsAndFrame,
            tools:content.sharing.tools
        }

    }

    render(){
        let lists = this.state.myFacts.map(function (list) { return <li>{list}</li>});
        const myFactsDiv = ( <ul> {lists} </ul>);
        let obj = this.state.langsAndFrame;
        const laf = Object.keys(obj).map(function (key) { return <li>{key.toUpperCase() +" : "+obj[key]}</li>});
        const langAndFrameDiv = (<ul>{laf}</ul>);
        const toollists = this.state.tools.map(function (list) { return (<li>{list} </li>  )});
        const toolsDiv = (<ul> {toollists}</ul>);
        let i =0;


        return(
            <Grid bsClass="container-fluid">
                <Row id="sharingboard">
                    <Col lg={12} md={12} sm={12} xs={12} className="sharingboard-content">
                        <h1>Sharing Board</h1>
                    </Col>
                    <Col lg={4}  md={4} sm={12} xs={12} className="sharingboard-content" >
                        <h3><Glyphicon glyph="star" /> {this.state.title[i]} </h3>
                        {myFactsDiv}
                    </Col>
                    <Col lg={4}  md={4} sm={12} xs={12} className="sharingboard-content" >
                        <h3><Glyphicon glyph="star" /> {this.state.title[++i]} </h3>
                        {langAndFrameDiv}
                    </Col>
                    <Col lg={4}  md={4} sm={12} xs={12} className="sharingboard-content" >
                        <h3><Glyphicon glyph="star" /> {this.state.title[++i]} </h3>
                        {toolsDiv}
                    </Col>

                </Row>
            </Grid>
        )}
}