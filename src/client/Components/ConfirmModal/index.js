import React from "react";
import { bool, func } from "prop-types";
import { Modal } from "antd";

class ConfirmModal extends React.Component {
  render() {
    return (
      <Modal title="You have unsaved changes" visible={this.props.visible} onOk={this.props.handleOk} onCancel={this.props.handleCancel}>
        Are you sure you want to move away from this page?
      </Modal>
    );
  }
}

ConfirmModal.propTypes = {
  visible: bool,
  handleOk: func,
  handleCancel: func
};

export default ConfirmModal;
