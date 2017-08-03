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
import React from 'react';
import {Grid,Row,Col,Glyphicon,Thumbnail,Button} from 'react-bootstrap';

const PortfolioDiv = function ({content}) {

    let projects;

    if(content.projects.length > 4)
    {
         projects = content.projects.slice(0).slice(-4);
    }
    else
    {
         projects = content.projects;
    }

    const Cols = projects.map(function (project) {



        return (
            <Col  lg={3} xs={12} sm={6} md={4} className="project">
                <Thumbnail href={project.project} src={project.img} alt="242x200" className="projects">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <h4>{project.date}</h4>
                </Thumbnail>
            </Col>)

    });

    return (
        <section id="portfolio">
        <Grid bsClass="container-fluid">
            <Row >
                <Col lg={12} md={12} sm={12} xs={12} className="sharingboard-content">
                    <h1>{content.title}</h1>
                </Col>
                {Cols}
            </Row>
        </Grid>
        </section> )

}


export default PortfolioDiv;