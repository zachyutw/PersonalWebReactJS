/**
 * Created by po-yingyu on 2017-07-24.
 */
/**
 * Created by po-yingyu on 2017-07-24.
 */
import React, { Component } from 'react';
function IntroDiv(props)
{


    const btnc = props.content.btnc;
    const btnUrl = props.content.btnUrl;
    const title = props.content.title;
    const paragraphC =  props.content.paragraphC.map(function (content) {
       return <p>{content}</p>

    });

    return (
        <div id="introDiv">
            <div className="intro-content">
                <h1>{title}</h1>
                <div id="personalIntro">
                    {paragraphC}
                    <a href={btnUrl} className="btn">{btnc}</a>
                </div>


            </div>
        </div>
    )
}

export default IntroDiv;