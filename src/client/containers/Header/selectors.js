import { createSelector } from 'reselect';

const selectEntries = (state) => state.get('newEntries');

export const makeSelectNewEntries = createSelector(selectEntries, (newEntries) => {
  return newEntries.toJS().length;
});
