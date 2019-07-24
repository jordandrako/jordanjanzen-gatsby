import React from 'react';
import renderer from 'react-test-renderer';
import H from './Header';

it('Header renders correctly', () => {
  const title = 'My test header';
  const header = renderer.create(<H siteTitle={title} />).toJSON();
  expect(header).toMatchSnapshot();
});
