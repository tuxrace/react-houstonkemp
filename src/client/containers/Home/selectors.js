import { createSelector } from 'reselect';

const selectEntries = (state) => state.get('entries');

export const makeSelectLatest = createSelector(selectEntries, (entries) => {
  return entries.toJS().reverse()[0];
});

