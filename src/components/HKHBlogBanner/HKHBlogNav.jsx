import React from 'react';
import './HKHBlogNav.less';

function HBlogNav(props) {
    const { navInfo, customClass } = props;
    const getNavUnit = ({
        title, desc, icon, id,
    }) => (
        <li className="nav-item" key={id}>
            <a href="/" target="_blank">
                <i className={`icon fa ${icon}`} />
                <div className="nav-item-right" >
                    <div className="title">
                        {title}
                    </div>
                    <div className="desc">
                        {desc}
                    </div>
                </div>
            </a>
        </li>

    );
    return (
        <ul className={`HKHBlogNav ${customClass}`}>
            {
                navInfo.map(item => getNavUnit(item))
            }
        </ul>
    );
}

HBlogNav.propTypes = {};
HBlogNav.defaultProps = {};
export default HBlogNav;
