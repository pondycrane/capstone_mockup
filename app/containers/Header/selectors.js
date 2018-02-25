/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHeader = (state) => state.get('header');

const makeSelectUsername = () => createSelector(
  selectHeader,
  (headerState) => headerState.get('username')
);

export {
  selectHeader,
  makeSelectUsername,
};
