import React, { Component } from 'react';
import { BackTop } from 'antd';
import GlobalTop from '../../global/GlobalTop/GlobalTop';
import PageTopBar from './PageTopBar';
import PageInfoModal from './PageInfoModal';
import PageContainer from './PageContainer';

class HSiterPageManager extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    state = {
        isPageInfoModalDisplayed: false,
        pageList: [],
        searchedPageList: null,
        pageInfo: {},
    }

    componentWillMount() {
        this.setState({
            pageList: this.props.pageList,
        });
    }

    showPageInfoModal = (trigger = true, pageInfo) => {
        this.setState({
            isPageInfoModalDisplayed: trigger,
            pageInfo: pageInfo || {},
        });
    }

    searchPage = (keyWord) => {
        if (!keyWord) {
            this.setState({
                searchedPageList: null,
            });
            return;
        }
        const { pageList } = this.state;
        const reg = new RegExp(keyWord);
        const searchResult = pageList.filter(page => reg.exec(page.page_name));
        this.setState({
            searchedPageList: searchResult,
        });
    }
    updatePageList = (newPageList = []) => {
        this.setState({
            pageList: newPageList,
        });
    }
    render() {
        return (
            <div id="hsiter-page-manager-app" className="hsiter-page-manager-app">
                <GlobalTop
                    activeNav="pageManager"
                />
                <PageTopBar
                    searchPage={this.searchPage}
                    showPageInfoModal={this.showPageInfoModal}
                />
                <PageContainer
                    pageList={this.state.searchedPageList || this.state.pageList}
                    updatePageList={this.updatePageList}
                    showPageInfoModal={this.showPageInfoModal}
                />
                <PageInfoModal
                    updatePageList={this.updatePageList}
                    showPageInfoModal={this.showPageInfoModal}
                    pageInfo={this.state.pageInfo}
                    visible={this.state.isPageInfoModalDisplayed}
                />
                <BackTop />
            </div>
        );
    }
}

export default HSiterPageManager;
