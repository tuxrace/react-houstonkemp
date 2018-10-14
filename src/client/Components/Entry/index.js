import React from "react";
import { Icon, Badge, Popconfirm } from "antd";
import { string, func } from 'prop-types';

import EntryWrapper from './EntryWrapper';

const Entry = ({ item, showDelete, handleDelete }) => (
  <EntryWrapper>
    <pre>
      <i>{`${item.content}`}</i> <br />
      <small>
        <span>word count</span> <Badge count={item.wordCount} style={{ backgroundColor: "#52c41a" }} />{" "}
      </small>
      <small>
        <span>sentiment</span> <Icon type="smile" theme="outlined" style={{ color: "green" }} />
      </small>
      {showDelete && (
        <Popconfirm placement="top" title="Are you sure you want to delete?" onConfirm={() => handleDelete(item.id)} okText="Yes" cancelText="No">
          <Icon type="delete" theme="outlined" style={{ color: "brown", fontSize: 18 }} />
        </Popconfirm>
      )}
    </pre>
  </EntryWrapper>
);

Entry.propTypes = {
  item: string,
  showDelete: func,
  handleDelete: func
}
export default Entry;
