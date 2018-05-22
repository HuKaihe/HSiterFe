import React from 'react';
// import PropTypes from 'prop-types';
import { message } from 'antd';

import PageCard from './PageCard';
import { post } from '../../service/service';

function PageContainer(props) {
    const deletePage = (page_id) => {
        post('pageManager/deletePage', { id: page_id }).then(({ code, payload }) => {
            if (code === 200) {
                props.updatePageList(payload.pageList);
                message.success('删除成功');
            }
        });
    };
    return (
        <div className="hsiter-page-container">
            {
                props.pageList.length === 0 ?
                    <div className="no-page" >
                        你一个页面都没有呢，点击右上角的【新建页面】创建一个吧~
                    </div> :
                    props.pageList.map(page => (
                        <div key={page.id} className="page-card-container">
                            <PageCard cardInfo={page} deletePage={deletePage} />
                        </div>
                    ))
            }
        </div>
    );
}

PageContainer.propTypes = {};
PageContainer.defaultProps = {};
export default PageContainer;
