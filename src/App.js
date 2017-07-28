import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import NavigationBar from './componments/NavigationBar';
import CoverDiv from './componments/CoverDiv';
import IntroDiv from './componments/IntroDiv';
import SharingBoardDiv from './componments/SharingBoardDiv';
import PortfolioDiv from './componments/PortfolioDiv';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

const webUserName = "Zach";



class App extends Component {
    constructor(props){
        super(props);
        this.state = {

            navigationBar:{
                naviLists: ['Home','About Me','Zach Website','Contact Me','Sharing board'],
                naviUrls: ['../public/index.html','#cover'],
            },
            cover : {
                title: 'Who am I',
                subtitle: ['Junior Full Stack Developer','Desire for a new opportunity'],
                btnc: 'LinkedIn',
                btnUrl: '#',
            },
            introduce: {
                title: 'Small Talk',
                paragraphC: ["Hi! I 'm Zach Yu and I am a fresh Full Stack Developer who just graduated from BCIT computer program. " +
                "My passion is to use technology based solutions, to help solve real world challenges. " +
                "I love learning new stuff related to programming and technology."+
                        "Coffee and Codes is my favirote, and I am very good at swimming and be a MCU nerd",
                    "I build a reactjs base personal website to promote myself"],
                btnc: "< code >" ,
                btnUrl: '#',
            },
            portfolio:[
                {
                    imgUrl:"https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-8/htmlcss1-img_bike7.png",
                    title:'#WackoJSPInventorySys / #CITProject',
                    desc:"Use MVC design to build a JSP web app",
                    projectUrl:'https://github.com/zachyutw/WackoJsp',
                    date: '2017/03'
                },
                {
                    imgUrl:'https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-8/htmlcss1-img_bike7.png',
                    title:'#LefflerWebApp / #CITProject',
                    desc:"Use Canvos and JavaScript to rebuild a flash web app",
                    projectUrl:'https://github.com/zachyutw/LafflerSoftwareProject',
                    date: '2017/04'
                },
                {
                    imgUrl:'https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-8/htmlcss1-img_bike7.png',
                    title:'#LunchWithLaddyReactNativeApp / #CITProject',
                    desc:"Use RESTFul and React-native to build a mobile-app prototype",
                    projectUrl:'https://github.com/zachyutw/WackoJsp',
                    date: '2017/03'
                },
                {
                    imgUrl:'https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-8/htmlcss1-img_bike7.png',
                    title:'#ReactJSPersonalWebsite / #codeJuly2017 /#v1',
                    desc:"I am using ReactJS to rebuild front-end interface of my website , include css and html design",
                    projectUrl:'https://github.com/zachyutw/WackoJsp',
                    date: '2017/03'
                }],
            SharingBoard:{
                myFacts:["I can swim 3000m in 70 mins.","I drank more than 3 cup of coffess everyday.",
                    "Like to try new restaurants.","I am looking a new tennis partner.","I have read more than 700 mangas",
                    "I am a big MCU fans", "I like to play bridges"],
                langsAndFrame:{
                    languages:["Java","C#"],
                    frontend:["Html","CSS","SASS","JavaScript","ReactJS","JSP"],
                    backend:["PHP","NodeJS"],
                    database:["MySQL","MangoDB","MS SQL"],
                    cloud:["AWS","Firebase"],
                    os:["Linux","Mac","Windows"]

                },
                tools:["Trello","Slack","Git","Github"]
            },





        }
    }
  render(){
    return (
      <div className="App">
          <NavigationBar lists={this.state.navigationBar.naviLists} listsUrl={this.state.navigationBar.naviUrls} username={webUserName}/>
          <CoverDiv title={this.state.cover.title} subtitle={this.state.cover.subtitle}
                    btnc={this.state.cover.btnc} btnUrl={this.state.cover.btnUrl}/>
          <IntroDiv content={this.state.introduce}/>
          <SharingBoardDiv content={this.state.SharingBoard}/>
          <PortfolioDiv content={this.state.portfolio}/>
      </div>
    );
  }
}


export default App;
