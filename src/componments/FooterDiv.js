/**
 * Created by po-yingyu on 2017-07-26.
 */
import React from 'react';
import {Grid,Row,Col,Glyphicon} from 'react-bootstrap';


const FooterDiv = function ({content}){

    const socialIcon = content.contactInfo.socialNetwork;
    const length = socialIcon.length;


    const Cols = socialIcon.map(function (div) {

        return (
            <Col lg={12/(length+1)} md={12/(length+1)} sm={12/length} xs={12/length} className="footer-content">
                <a href={div.url}><i className={div.fa}></i></a>
            </Col>)

    });
    return(
        <footer id="footer">
            <Grid bsClass="container-fluid">
                <Row >

                    <Col lg={3} md={3} sm={12} xs={12} className="leftFooter">
                        <span className="fa fa-phone-square"> {content.contactInfo.phone} </span> <br/>
                        <span className="fa fa-envelope"> {content.contactInfo.email} </span>
                    </Col>
                    {Cols}

                </Row>
            </Grid>
        </footer>
    )

}



export default FooterDiv;