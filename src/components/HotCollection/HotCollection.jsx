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
    cards: [
        {
            title: 'React',
            url: 'http://www.baidu.com',
            pictureUrl: 'https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg',
        },
        {
            title: 'Vuejs',
            url: 'http://www.baidu.com',
            pictureUrl: 'https://cn.vuejs.org/images/logo.png',
        },
        {
            title: 'BAT前端校招面试思考',
            url: 'http://www.baidu.com',
            pictureUrl: 'http://fontawesome.hukaihe.com/public/image/logo_gold.png',
        },
        {
            title: 'Angular',
            url: 'http://www.baidu.com',
            pictureUrl: 'https://www.angular.cn/assets/images/logos/angular/angular.svg',
        },
    ],
    showTitle: true,
    moduleTitle: '热门集合',
};


export default HotCollection;
