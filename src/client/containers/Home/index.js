import React, { PureComponent } from 'react'
import HomeWrapper from './HomeWrapper';
import {connect} from 'react-redux';
import {compose} from 'redux'
import { createStructuredSelector } from 'reselect';
import {makeSelectLatest} from './selectors';

import Entry from "../../components/Entry";

class Home extends PureComponent{
  handleClick = () => {
    this.props.history.push("/add");
  }
  render(){    
    return <HomeWrapper> 
        <h1>Latest Entry </h1>    
        <Entry item={this.props.latest}/>
      </HomeWrapper>
  }
}

const mapStateToProps = createStructuredSelector({
  latest: makeSelectLatest
});

const withConnect = connect(mapStateToProps, {});

export default compose(withConnect)(Home);
