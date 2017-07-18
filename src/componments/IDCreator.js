/**
 * Created by po-yingyu on 2017-07-11.
 */
import React from 'react';
import ReactDOM from 'react-dom';
const first_names = ['Frank','Peter','Bill','Jun','Zach','York'];


export class IDCreator extends React.Component {
    componentWillMount(){
        this.state.firstName = IDCreator.randomArrayValue(first_names);
    }
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address1: 0,
            addrees2: 0,
            addressStreet: '',
            postNumber:'',
            stateCap:'',
            phone:'',
        }
    }
    render(){
          return <h1>{this.state.firstName}</h1>
    }
}
IDCreator.randomMinMax = (min,max)=>{
    let r = Math.random();
    return Math.floor(r*(max-min)+min);
}

IDCreator.randomArrayValue = (arrayName)=>{
    let randomIndex = Math.floor(Math.random()*arrayName.length);
    return arrayName[randomIndex];
}
IDCreator.getNewFirstName=()=>{
    let firstName = IDCreator.randomArrayValue(first_names);
    return firstName;
}

ReactDOM.render(<IDCreator/>,document.getElementById('app'));