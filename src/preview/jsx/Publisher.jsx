import React from 'react';
import { message } from 'antd';
// import PropTypes from 'prop-types';
import { post } from '../../service/service';

function Publisher(props) {
    const { page_id, page_url, page_title } = props.pageInfo;
    const publishPage = () => {
        document.getElementById('publisher').remove();
        const bodyHTML = document.getElementsByTagName('body')[0].innerHTML;
        post('editor/publish', {
            page_id,
            page_url,
            page_title,
            bodyHTML,
        }).then(({ code, payload }) => {
            if (code !== 200) {
                message.error('服务器开小差了，请刷新重试');
                return;
            }
            const { newPageUrl } = payload;
            message.success('发布成功，2s后进行跳转');
            setTimeout(() => {
                window.location.href = newPageUrl;
            }, 2000);
        }).catch(() => {
            message.error('服务器开小差了，请刷新重试');
        });
    };
    return (
        <div className="hsiter-publisher spin-icon" onClick={publishPage}>
            <i className="fa fa-paper-plane-o icon" />
            <span>发布页面</span>
        </div>
    );
}

Publisher.propTypes = {};
Publisher.defaultProps = {};
export default Publisher;
