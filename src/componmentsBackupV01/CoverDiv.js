/**
 * Created by po-yingyu on 2017-07-24.
 */
import React, { Component } from 'react';
function CoverDiv(props)
{
    const h1c = props.title;
    const btnc = props.btnc;
    const btnUrl = props.btnUrl;
    const subtitles = props.subtitle.map(function (subtitle){ return <h2>{subtitle}</h2> });
    return (
        <div id="cover">
            <div className="cover-content">
                <h1>{h1c}</h1>
                <div className="profileImg">
                </div>
                {subtitles}
                <a href={btnUrl} className="btn">{btnc}</a>
            </div>

        </div>
    )
}

export default CoverDiv;