import React from 'react';
import { render } from '@testing-library/react';
import SideMenu from '../components/SideMenu';
import renderer from 'react-test-renderer';
import { TestProvider } from '../helpers/providers'


it('should display correctly SideMenu', async () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <SideMenu
        setBackground={() => {}}
        board={{title: 'title' }}
        setSearch={() => {}}
        search={''}
        isResultEmpty={true}
      />
      </TestProvider>
    );
  
    const menu = getByText('Menu');
    expect(window.getComputedStyle(menu).display).toEqual('block');

  });
  it('should check snapshot for SideMenu', () => {
    const tree = renderer
      .create(
        <TestProvider>
        <SideMenu
        setBackground={() => {}}
        board={{title: 'title' }}
        setSearch={() => {}}
        search={''}
        isResultEmpty={true}
      />
      </TestProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

