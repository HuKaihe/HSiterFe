import React from 'react';
// import PropTypes from 'prop-types';
import { getRandomString } from '../../service/service';
import './HKHBlogNav.less';

function HBlogNav(props) {
    const { navInfo, customClass } = props;
    const getNavUnit = ({ title, desc, icon }) => (
        <li className="nav-item" key={getRandomString()}>
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
