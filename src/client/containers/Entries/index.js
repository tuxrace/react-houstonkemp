import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Popconfirm, message, Button, Icon, Badge } from "antd";

import Entry from "../../components/Entry";
import EntriesWrapper from "./EntriesWrapper";
import { makeSelectEntries } from "./selectors";
import { deleteEntry } from "./actions";

class Entries extends PureComponent {
  handleDelete = (id) => {
    console.log(id)
    this.props.dispatchDeleteEntry(id);
  };
  render() {
    const entries = this.props.entries.map((item) => (
      <Entry 
        item={item}
        showDelete
        handleDelete={this.handleDelete}
      />
    ));
    return (
      <EntriesWrapper>
        <br />
        {entries}
      </EntriesWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  entries: makeSelectEntries
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteEntry: (id) => dispatch(deleteEntry(id))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Entries);
