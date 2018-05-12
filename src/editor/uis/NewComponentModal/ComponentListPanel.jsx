import React from 'react';
import { Tooltip } from 'antd';
import classnames from 'classnames';

function ComponentListPanel(props) {
    const { componentList } = props;
    const { setActiveComponentId } = props;

    const getComponentCard = (card) => {
        const cardCls = classnames({
            'component-card': true,
            active: card.id === props.activeComponentId,
        });
        return (
            <div
                className={cardCls}
                key={card.id}
                onClick={() => {
                    setActiveComponentId(card.id);
                }}
            >
                <div className="cover-img">
                    <img src={card.img} alt={card.title} />
                </div>
                <div className="component-title"> {card.title} </div>
                <div className="component-desc">
                    <Tooltip title={card.desc} overlayClassName="text-tip">
                        {card.desc}
                    </Tooltip>
                </div>
                <ul className="component-info">
                    <li>
                        <a href={card.github} target="_blank">
                            <i className="fa fa-github" />
                        </a>
                    </li>
                    <li>
                        <button target="_blank">
                            <i className="fa fa-star-o" />
                        </button>
                    </li>
                </ul>
            </div>
        );
    };
    return (
        <div className="component-menu-panel">
            {
                componentList.length ?
                    componentList.map(card => getComponentCard(card), this) :
                    <div className="wait-to-be-online">
                        更多组件上线中... ...
                    </div>
            }
        </div>
    );
}

ComponentListPanel.propTypes = {};
ComponentListPanel.defaultProps = {};
export default ComponentListPanel;
