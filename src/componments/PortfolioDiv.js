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
import React, { Component } from 'react';



function PortfolioDiv(props)
{

    const portfolio = props.content.map(function(n,i){
        return (

            <div className="product">
                <h3>{n.title}</h3>
            <img id={"portfolio"+i} alt={n.title} src={n.imgUrl}/>
                <p>{n.desc}</p>

            <h4>{n.date}</h4>
            <a href={n.projectUrl} className="btn">Link</a>
        </div>)
    });
    return (
        <div id="portfolioD">
        <div className="products">
            <h3 className="blue">Portfolio</h3>

                {portfolio}

        </div>
        </div>
    )}

export default PortfolioDiv;