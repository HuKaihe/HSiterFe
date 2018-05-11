import React from 'react';

// import PropTypes from 'prop-types';
// import { classames } from 'classnames';
import { Modal, Tabs } from 'antd';

const { TabPane } = Tabs;

function NewComponentModal(props) {
    const {
        tabs,
        copy,
        isNewComponentModalDisplayed,
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
                onOk={addNewComponent}
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
                                <item.PaneContent {...item} />
                            </TabPane>
                        ))
                    }
                </Tabs>
            </Modal>
        </div>
    );
}

NewComponentModal.propTypes = {};
NewComponentModal.defaultProps = {};
export default NewComponentModal;
