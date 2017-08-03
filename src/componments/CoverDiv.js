/**
 * Created by po-yingyu on 2017-07-24.
 */
import React, { Component } from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import profileImg from '../img/File_000.jpeg';


export class CoverDiv extends Component{
    constructor(props){
        super(props);
        this.state={
            cover: {
                title: "",
                subtitle: [],
                btnStr: "",
                btnUrl: "",
                bgUrl: [],
                profileImg:""
            },
            currentBG: 0,


        }
        this.nextBG = this.nextBG.bind(this);
        this.loadData = this.loadData.bind(this);
        this.imgUrl =this.imgUrl.bind(this);
        this.interval = null;

    }
    loadData(){
        this.setState({
            cover: this.props.content
        });
    }
    nextBG(){
        let current = this.state.currentBG;
        let next = ++ current % this.state.cover.bgUrl.length;
        this.setState({currentBG:next});
    }
    imgUrl(url,repeat,position,size){
        return {backgroundImg: 'url("'+ url+ '")', backgroundRepeat: repeat,backgroundPosition: position,backgroundSize:size }
    }
    componentDidMount() {
        this.loadData();
        this.interval = setInterval(this.nextBG, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render(){
        let subtitle = this.state.cover.subtitle.map(function (s) { return <h2>{s}</h2>});
        let url = this.state.cover.bgUrl[this.state.currentBG];
        let inlinestyle = {background: 'url("'+ url+ '") no-repeat center',transition: "background 2s linear"};

        return(
        <section id="cover" style={inlinestyle}>
        <Grid bsClass="container-fluid" >
            <Row>
                <Col lgOffset={1} lg={10} mdOffset={1}  md={10} className="cover-content" >
                    <h1>{this.state.cover.title}</h1>
                    <div className="profileImg" style={this.imgUrl(this.state.cover.profileImg)}>
                    </div>
                </Col>
                <Col lgOffset={1} lg={10} mdOffset={1}  md={10} xsHidden className="cover-content" >
                    {subtitle}
                </Col>
                <Col lgOffset={1} lg={10} mdOffset={1}  md={10} className="cover-content" >
                    <br/>
                <Button bsStyle="" className="ghost-button-rounded-corners" href={this.state.cover.btnUrl}>{this.state.cover.btnStr}</Button>
                </Col>
            </Row>
        </Grid>
        </section>
    )}
}
export default CoverDiv;

