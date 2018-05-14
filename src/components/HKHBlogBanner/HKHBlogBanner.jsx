import React from 'react';
import { Carousel } from 'antd';
import './images/bg_1.jpg';
import './images/bg_2.jpg';
import './images/bg_3.jpg';

import HKHBlogNav from './HKHBlogNav';
import './HKHBlogBanner.less';


export default function () {
    const cardsInfo = [
        {
            id: 'card1',
            title: '邮子心声',
            paragraphs: [
                `我享受互联网赋予生活的事捷功倍，更享受用互联网进行创作的天马星空；我感谢“开源社区”中陌生工程师的鼎力相助，更感谢“开源精神”让我愿意用爱对需要帮助的人“慷慨解囊”。
            我学会用逻辑理智地处理生活中的问题，就像处理程序中的Bug一样；我在快节奏生活中大步流星，就像在技术的迭代中逆水行舟一样。
            四年的大学生涯让我感觉，软件工程不像是一个专业领域，更像是一种人生哲学与生活方式。`,
                '胡凯赫',
                '阿里巴巴（中国）网络技术有限公司',
            ],
        },
        {
            id: 'card2',
            title: 'BAT前端校招面试思考重磅来袭',
            paragraphs: [
                '阅读这本书的前提是你对前端开发技术足够敬畏和感兴趣，但这可不是你能进BAT的前提：你需要过硬的技术功底以及丰富的项目经验，这只有靠你自己努力得到，但我相信，如果时间允许，这些是总能触及的。剩下的才是通过阅读这本书能够改善的东西：对考点的学习方法与面试技巧。',
                '胡凯赫',
                '阿里巴巴（中国）网络技术有限公司',
            ],
        },
    ];

    const navInfo = [
        {
            id: 'nav1',
            title: '技术小栈',
            desc: '有步骤、有分析、有对比、有思考',
            icon: 'fa-gitlab',
        },
        {
            id: 'nav2',
            title: '神学研究',
            desc: '初级的神学理论、独立的神学思考',
            icon: 'fa-skyatlas',
        },
        {
            id: 'nav3',
            title: '文学艺术',
            desc: '生活不止眼前的苟且 还有诗和远方的田野',
            icon: 'fa-fort-awesome',
        },
        {
            id: 'nav4',
            title: 'dashboard',
            desc: '站长小工具集',
            icon: 'fa-dashboard',
        },
        {
            id: 'nav5',
            title: '关于我',
            desc: '站长简介，期待结交更多的朋友',
            icon: 'fa-facebook-official',
        },
    ];


    const getBannerPiece = ({ title, paragraphs, id }) => (
        <div key={id} className="banner-piece">
            <div className="title">{title}</div>
            <div className="desc">
                {
                    paragraphs.map((i, index) => <p key={index}>{i}</p>)
                }
            </div>
        </div>
    );

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
