import React from "react";
import { Modal } from 'antd';

class ConfirmModal extends React.Component {
  render() {
    return (
        <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
        >
        Are you sure you want to cancel?
        </Modal>
    );
  }
}

export default ConfirmModal;
