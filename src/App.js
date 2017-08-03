import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Data.json';
import NavigationBar from './componments/NavigationBar';
import {CoverDiv} from './componments/CoverDiv';
import IntroDiv from './componments/IntroDiv';
import SharingDiv from './componments/SharingDiv';
import PortfolioDiv from './componments/PortfolioDiv';
import FooterDiv from './componments/FooterDiv';
class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            navigationBar: data.navigationBar,
            cover:data.cover,
            introduce:data.introduce,
            sharing:data.sharing,
            portfolio:data.portfolio,
            footer:data.footer
        }
    }
    render() {

        return (

            <div className="App">
                <NavigationBar brand={this.state.navigationBar.brand} lists={this.state.navigationBar.naviLists}/>
                <CoverDiv content={this.state.cover}/>
               <IntroDiv title={this.state.introduce.title} paragraphs={this.state.introduce.paragraphs} btn={this.state.introduce.btn}/>
               <SharingDiv title={this.state.sharing.title} divs={this.state.sharing.divContent}/>
                <PortfolioDiv content={this.state.portfolio}/>
                <FooterDiv content={this.state.footer}/>
            </div>
        );
    }
}


export default App;
