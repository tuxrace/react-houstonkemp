import React, { PureComponent } from "react";
import { connect } from "react-redux";
import AddWrapper from "./AddWrapper";
import { Row, Col, Input, Form, Button, Divider, Icon, notification } from "antd";
import { compose } from "redux";
import { addEntry } from "./actions";

class Add extends PureComponent {
  handleSave = () => {
    const { validateFieldsAndScroll } = this.props.form;
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

  handleCancel = () => {};
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
              })(<TextArea rows={6} />)}
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
            <Button type="default" size="large" onClick={this.handleCancel}>
              Cancel
            </Button>
          </Col>
        </Row>
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
