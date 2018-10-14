import { createSelector } from 'reselect';

const selectEntries = (state) => state.get('entries');

export const makeSelectEntries = createSelector(selectEntries, (entries) => {
  return entries.toJS().reverse();
});
