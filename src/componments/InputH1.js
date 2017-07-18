/**
 * Created by po-yingyu on 2017-07-11.
 */
import React from 'react';

export class InputH1 extends React.Component {
    componentWillMount(){
        this.state.userInput = 'default';
    }
    constructor(props)
    {
        super(props);
        this.state={
            userInput:'',
            color: 'black'
        }
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(e)
    {
        this.setState({userInput:e.target.value});
    }

    render() {
        return (
            <div>
                <input style={{color:this.props.color}} type="text" onChange = {this.handleUserInput} value={this.state.userInput}/>
                <h1>{this.state.userInput}</h1>
            </div>
        );
    }
}

export default InputH1;
