import React from 'react';

// import PropTypes from 'prop-types';
// import { classames } from 'classnames';
import { Modal, Tabs, message } from 'antd';
import globalStore from '../../../service/globalStore';

const { TabPane } = Tabs;

function ComponentModal(props) {
    const {
        tabs,
        copy,
        isNewComponentModalDisplayed,
        componentInfoGroup,
    } = props;
    const {
        closeNewComponentModal,
        addNewComponent,
    } = props;
    return (
        <div>
            <Modal
                width="1250px"
                getContainer={() => document.getElementById('app')}
                bodyStyle={{ padding: '10px 15px' }}
                className="component-modal"
                wrapClassName="vertical-center-modal"
                closable={false}
                visible={isNewComponentModalDisplayed}
                onOk={() => {
                    if (!globalStore.get('newComponentTypeId')) {
                        message.error('请选择一个元素');
                        return;
                    }
                    addNewComponent();
                    closeNewComponentModal();
                }}
                okText={copy.okText}
                onCancel={closeNewComponentModal}
                cancelText={copy.cancelText}
            >
                <Tabs mode="horizontal">
                    {
                        tabs.map(item => (
                            <TabPane
                                key={item.key}
                                tab={<span className="tab-title"><i className={`fa ${item.icon}`} />{item.title}</span>}
                            >
                                <item.PaneContent
                                    componentInfoGroup={componentInfoGroup}
                                />
                            </TabPane>
                        ))
                    }
                </Tabs>
            </Modal>
        </div>
    );
}

ComponentModal.propTypes = {};
ComponentModal.defaultProps = {};
export default ComponentModal;
