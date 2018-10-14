import React, { PureComponent } from "react";
import { connect } from "react-redux";
import AddWrapper from "./AddWrapper";
import { Row, Col, Input, Form, Button, Divider, Icon, notification } from "antd";
import { compose } from "redux";

import { addEntry } from "./actions";
import ConfirmModal from "../../Components/ConfirmModal";

class Add extends PureComponent {
  state = {
    visible: false
  };
  handleSave = () => {
    const { validateFieldsAndScroll, dispatchAddEntry } = this.props.form;
    validateFieldsAndScroll((errors, values) => {
      if (!errors) {
        this.props.dispatchAddEntry(values.content);
        const openNotification = () => {
          notification.open({
            message: "Success",
            description: "Success your entry has been added",
            duration: 4,
            icon: <Icon type="check-circle" theme="outlined" />
          });
        };
        openNotification();
        this.props.history.push("/");
      }
    });
  };

  showConfirm = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleOk = () => {
    this.props.history.push("/");
  };
  handleOnKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleSave();
    }
  };
  render() {
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        lg: { span: 2 }
      },
      wrapperCol: {
        lg: { span: 22 }
      }
    };
    return (
      <AddWrapper>
        <Divider orientation="left">
          Add an entry <Icon type="pushpin" theme="outlined" />
        </Divider>
        <Row type="flex" justify="center">
          <Col span={24}>
            <Form.Item label="Content" {...formItemLayout}>
              {getFieldDecorator("content", {
                rules: [
                  {
                    required: true,
                    message: "Please add a content"
                  }
                ]
              })(<TextArea rows={6} autoFocus onKeyUp={this.handleOnKeyUp} />)}
            </Form.Item>
          </Col>
        </Row>
        <br />
        <Row type="flex" justify="end">
          <Col span={4}>
            <Button type="primary" size="large" onClick={this.handleSave}>
              Save entry
            </Button>
          </Col>
          <Col>
            <Button type="default" size="large" onClick={this.showConfirm}>
              Cancel
            </Button>
          </Col>
        </Row>
        <ConfirmModal visible={this.state.visible} handleOk={this.handleOk} handleCancel={this.handleCancel} />
      </AddWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAddEntry: (data) => dispatch(addEntry(data))
});

const withConnect = connect(
  null,
  mapDispatchToProps
);
const withForm = Form.create({});

export default compose(
  withForm,
  withConnect
)(Add);
