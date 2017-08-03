/**
 * Created by po-yingyu on 2017-07-24.
 */
/**
 * Created by po-yingyu on 2017-07-24.
 */
import React from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
const IntroDiv =function ({title,paragraphs,btn}) {
    const paragraph = paragraphs.map(function (p) { return (<p>{p}</p>)});
    return(
        <section id="introDiv">
        <Grid bsClass="container-fluid">
            <Row >
                    <Col lgOffset={1} lg={10} mdOffset={1}  md={10} className="intro-content" >
                        <h1>{title}</h1>
                    </Col>
                    <Col lgOffset={3} lg={6} mdOffset={3}  md={6} xsHidden smHidden className="intro-content" >
                        {paragraph}
                    </Col>
                    <Col lgOffset={1} lg={10} mdOffset={1}  md={10} className="intro-content" >
                        <br/>
                        <Button bsStyle="" className="ghost-button-rounded-corners" href={btn.url}>{btn.text}</Button>
                    </Col>
            </Row>
        </Grid>
        </section>
    );

}
IntroDiv.protoTypes = {
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
    btn:PropTypes.object.isRequired
};
IntroDiv.defaultProps = {
    title: "Error No Data",
    paragraphs: ["NoData1","NoData2"],
    btn:{text:"none",url:"#"}
};
export default IntroDiv;