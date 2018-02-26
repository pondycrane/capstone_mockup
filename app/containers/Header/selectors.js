/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHeader = (state) => state.get('header');

const makeSelectUsername = () => createSelector(
  selectHeader,
  (headerState) => headerState.get('user').username
);

const makeSelectRole = () => createSelector(
  selectHeader,
  (headerState) => headerState.get('user').role
);

const makeSelectUser = () => createSelector(
  selectHeader,
  (headerState) => headerState.get('user')
);

export {
  selectHeader,
  makeSelectUsername,
  makeSelectUser,
  makeSelectRole,
};
