/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NoteList from '../../components/NoteList/NoteList';

window.matchMedia = jest.fn(query => ({ 
  matches: query.indexOf('(min-width: 726px)') !== -1, 
})); 

describe('<NoteList/>', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const fakeProps = {
        notes: [],
        activeNote: null,
        addNote: () => {},
        removeNote: () => {},
        updateActiveNote: () => {}
      }
      const wrapper = shallow(<NoteList {...fakeProps}/>).dive();
      expect(toJson(wrapper)).toMatchSnapshot;
    });
  });
});
