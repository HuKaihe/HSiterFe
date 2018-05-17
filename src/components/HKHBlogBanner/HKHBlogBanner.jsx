import React from 'react';
import { Carousel } from 'antd';
import './images/bg_1.jpg';
import './images/bg_2.jpg';
import './images/bg_3.jpg';

import HKHBlogNav from './HKHBlogNav';
import './HKHBlogBanner.less';


export default function (props) {
    const { navInfo, cardsInfo } = props;

    const getBannerPiece = ({ title, paragraphs, id }) => {
        const splitedParagraphs = paragraphs.split('\n');
        return (
            <div key={id} className="banner-piece">
                <div className="title">{title}</div>
                <div className="desc">
                    {
                        splitedParagraphs.map((i, index) => <p key={index}>{i}</p>)
                    }
                </div>
            </div>
        );
    };

    return (
        <div className="HComponent HKHBlogBanner">
            <HKHBlogNav navInfo={navInfo} customClass="nav" />
            <div className="cover" />
            <Carousel autoplay>
                {
                    cardsInfo.map(item => getBannerPiece(item))
                }
            </Carousel>
        </div>
    );
}
