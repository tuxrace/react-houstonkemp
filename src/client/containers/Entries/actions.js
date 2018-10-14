import {DELETE_ENTRY} from '../../constants';

export const deleteEntry = (id) => {
  return {
    type: DELETE_ENTRY,
    id
  }
}