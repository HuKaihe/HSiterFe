import React from 'react';
import './HotCollection.less';
import './images/HotCollection.jpg';
import './images/ukll.gif';

function HotCollection(props) {
    const { moduleTitle, cards = [] } = props;
    return (
        <div className="HComponent HotCollection">
            <div className="title">{moduleTitle}</div>
            <div className="card-container">
                {
                    cards.map(item => (
                        <div className="card" key={item.id}>
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
};


export default HotCollection;
