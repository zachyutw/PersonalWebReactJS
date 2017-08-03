
import React from 'react';
import {Grid,Row,Col,Glyphicon} from 'react-bootstrap';
import ZYLists from './ZYLists';

const SharingDiv = function ({title,divs}){

    const Cols = divs.map(function (div) {
        if(div.lists == null){
            div.lists = div.categories.map(function (category) {return category.name.toUpperCase()+ " : "+category.lists;})
        }
        return (
            <Col lg={12/divs.length} md={12/divs.length} sm={12} xs={12} className="sharingboard-content">
                <h3><Glyphicon glyph="star" /> {div.title} </h3>

                    <ZYLists lists={div.lists} />
            </Col>)

    });
    return(
    <section id="sharingboard">
        <Grid bsClass="container-fluid">
        <Row >
            <Col lg={12} md={12} sm={12} xs={12} className="sharingboard-content">
                <h1>{title}</h1>
            </Col>
            {Cols}

        </Row>
    </Grid>
    </section>
)
    
}



export default SharingDiv;


