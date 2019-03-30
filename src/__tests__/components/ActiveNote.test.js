/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ActiveNote from '../../components/ActiveNote/ActiveNote';

describe('<ActiveNote/>', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const fakeProps = {
        notes: [],
        activeNote: null,
        changeNoteTitle: () => {},
        changeNoteBody: () => {},
      };
      const wrapper = shallow(<ActiveNote {...fakeProps} />).dive();
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
