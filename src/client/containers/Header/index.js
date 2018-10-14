import React, { PureComponent } from 'react'
import HeaderWrapper from './HeaderWrapper';
import { Row, Col, Icon, Button, Badge } from 'antd';
import { withRouter } from "react-router";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeSelectNewEntries } from './selectors';
import {createStructuredSelector} from 'reselect';
import { clearNewEntries } from './actions';

class Header extends PureComponent{
  handleClick = (path) => {
    this.props.history.push(path);
    if (path === '/view'){      
      this.props.dispatchClearNewEntries();
    }
  }

  render(){
    console.log(this.props.newEntries)
    return <HeaderWrapper>
      <h1> My Online Diary <Icon type="highlight" theme="outlined" /> </h1>
      <Row type="flex" justify="center">
        <Col span={2}><Button type="primary" size="large" icon="home"  onClick={() => this.handleClick('/')}>Home</Button></Col> 
        <Col span={2}><Button type="primary" size="large" icon="cloud" onClick={() => this.handleClick('/add')}>Add Entry</Button></Col> 
        <Col span={3}><Badge count={this.props.newEntries}><Button type="primary" size="large" icon="file" onClick={() => this.handleClick('/view')}>View Entries</Button></Badge></Col>
      </Row>
    </HeaderWrapper>
  }
}

const mapStateToProps = createStructuredSelector({
  newEntries: makeSelectNewEntries
});

const mapDispatchToProps = (dispatch) => ({
  dispatchClearNewEntries: () => dispatch(clearNewEntries())
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(Header);
