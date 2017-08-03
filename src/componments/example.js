/**
 * Created by po-yingyu on 2017-07-31.
 */
const obj = {tt:1,tt2:2,tt3:4}
const objc = Object.keys(obj).map(function (key) { return obj[key]
});

/** Simple Conpoment **/

export class CoverDiv extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){return("")}
}
export default CoverDiv;

const stateless = function ({parameters}) {
    return (<h1>{parameters}</h1>)

}
export default stateless;