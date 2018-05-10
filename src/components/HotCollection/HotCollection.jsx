import React from 'react';
import './HotCollection.less';
import { getRandomString } from '../../service/service';
import './images/HotCollection.jpg';
import './images/ukll.gif';

function HotCollection(props) {
    const { moduleTitle, cards } = props;
    return (
        <div className="HComponent HotCollection">
            <div className="title">{moduleTitle}</div>
            <div className="card-container">
                {
                    cards.map(item => (
                        <div className="card" key={getRandomString()}>
                            <a href={item.url}>
                                <img className="picture" src={item.pictureUrl} alt={item.title} />
                                <div className="intro">{item.title}</div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

HotCollection.defaultProps = {
    cards: [{
        title: 'BAT前端校招面试思考',
        url: 'http://www.baidu.com',
        pictureUrl: './images/HotCollection.jpg',
    }],
    showTitle: true,
    moduleTitle: '热门集合',
};


export default HotCollection;
