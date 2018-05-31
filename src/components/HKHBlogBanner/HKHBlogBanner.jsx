import React from 'react';
import { Carousel } from 'antd';
import classnames from 'classnames';

import HKHBlogNav from './HKHBlogNav';
import './HKHBlogBanner.less';


export default function (props) {
    const { navInfo, cardsInfo, backgroundImage } = props;

    const pieceCls = classnames({
        'banner-piece': true,
        'big-banner-piece': !props.showNav,
    });

    const getBannerPiece = ({ title, paragraphs, id }) => {
        const splitedParagraphs = paragraphs.split('\n');
        return (
            <div key={id} className={pieceCls}>
                <div className="content-container">
                    <div className="title">{title}</div>
                    <div className="desc">
                        {
                            splitedParagraphs.map((i, index) => <p key={index}>{i}</p>)
                        }
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="HComponent HKHBlogBanner" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {
                props.showNav && <HKHBlogNav navInfo={navInfo} customClass="nav" />
            }
            <div className="cover" />
            <Carousel autoplay>
                {
                    cardsInfo.map(item => getBannerPiece(item))
                }
            </Carousel>

        </div>
    );
}
