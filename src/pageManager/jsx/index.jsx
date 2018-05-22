import React, { Component } from 'react';
import { BackTop } from 'antd';

import { deepCloneObj } from '../../service/service';
import GlobalTop from '../../global/GlobalTop/GlobalTop';
import PageTopBar from './PageTopBar';
import NewPageModal from './NewPageModal';
import PageContainer from './PageContainer';

class HSiterPageManager extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    state = {
        isNewPageModalDisplayed: false,
        pageList: [],
        searchedPageList: null,
    }

    componentWillMount() {
        this.setState({
            pageList: deepCloneObj(window.pageList),
        });
    }

    showNewPageModal = (trigger = true) => {
        this.setState({
            isNewPageModalDisplayed: trigger,
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
                <GlobalTop activeNav="pageManager" />
                <PageTopBar
                    searchPage={this.searchPage}
                    showNewPageModal={this.showNewPageModal}
                />
                <PageContainer
                    pageList={this.state.searchedPageList || this.state.pageList}
                    updatePageList={this.updatePageList}
                />
                <NewPageModal
                    updatePageList={this.updatePageList}
                    showNewPageModal={this.showNewPageModal}
                    visible={this.state.isNewPageModalDisplayed}
                />
                <BackTop />
            </div>
        );
    }
}

export default HSiterPageManager;
