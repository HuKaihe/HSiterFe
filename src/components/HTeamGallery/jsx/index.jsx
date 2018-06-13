import React from 'react';
import { Tooltip } from 'antd';
// import PropTypes from 'prop-types';

function App(props) {
    return (
        <div className="HComponent HTeamGallery">
            <ul className="team-intro">
                <li className="gallery-title">
                    {
                        props.showTitle && props.galleryTitle
                    }
                </li>
                <li className="team-motto">
                    {
                        props.showTeamMotto && props.teamMotto
                    }
                </li>
                <li className="team-contact">
                    {
                        props.showTeamContact && `Contact:  ${props.teamContact}`
                    }
                </li>
            </ul>
            <ul className="team-number-list">
                {
                    props.teamMember.map(member => (
                        <li key={member.id}>
                            <div
                                className="profile"
                                style={{
                                    backgroundImage: `url(${member.profile})`,
                                }}
                            />
                            <div className="member-name">
                                {
                                    member.name
                                }
                            </div>
                            <div className="member-desc">
                                {
                                    member.desc &&
                                    <Tooltip title={member.desc}>
                                        { member.desc.length > 100 ? `${member.desc.slice(0, 100)}... ...` : member.desc}
                                    </Tooltip>
                                }
                            </div>
                            <div className="member-contact">
                                {
                                    member.home &&
                                    <a href={member.home} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-home" />
                                    </a>
                                }
                                {
                                    member.github &&
                                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-github" />
                                    </a>
                                }
                                {
                                    member.email &&
                                    <Tooltip title={member.email}>
                                        <a href="/#">
                                            <i className="fa fa-envelope-o" />
                                        </a>
                                    </Tooltip>
                                }
                                {
                                    member.phone &&
                                    <Tooltip title={member.phone}>
                                        <a href="/#">
                                            <i className="fa fa-phone" />
                                        </a>
                                    </Tooltip>
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

App.propTypes = {};
App.defaultProps = {};
export default App;
