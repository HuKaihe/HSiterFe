import React from 'react';
import './HKHBlogCollection.less';

function HKHBlogCollection(props) {
    const { moduleTitle, cards = [] } = props;
    return (
        <div className="HComponent HKHBlogCollection">
            {
                props.showTitle && <div className="title">{moduleTitle}</div>
            }
            <div className="card-container">
                {
                    cards.map(item => (
                        <div className="card" key={item.id}>
                            <a href={item.url} target="_blank">
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

HKHBlogCollection.defaultProps = {
};


export default HKHBlogCollection;
