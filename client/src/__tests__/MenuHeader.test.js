import React from 'react';
import { render } from '@testing-library/react';
import MenuHeader from '../components/MenuHeader';
import renderer from 'react-test-renderer';


it('should display correctly MenuHeader', async () => {
    const { getByText, getByTestId } = render(
        <MenuHeader
        text="Menu"
        closeHandler={() => {}}
        type="menu"
      />
    );
  
    const menu = getByText('Menu');
    expect(window.getComputedStyle(menu).display).toEqual('block');

  });
  
  it('should display correctly', async () => {
    const { getByText } = render(
        <MenuHeader
        text="Menu"
        closeHandler={() => {}}
        type="menu"
      />
    );
  
    const menu = getByText('Menu');
    expect(window.getComputedStyle(menu).display).toEqual('block');

  });
  
  it('should check snapshot for MenuHeader', () => {
    const tree = renderer
      .create(
        <MenuHeader
        text="Menu"
        closeHandler={() => {}}
        type="menu"
      />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should close MenuHeader one time', async () => {
    const mockCallback = jest.fn(() => {});

    const { getByText, getByTestId } = render(
        <MenuHeader
        text="Menu"
        closeHandler={mockCallback}
        type="menu"
      />
    );
  
    const closeButton = getByTestId('MenuHeader-close-button');
    closeButton.click();
    expect(mockCallback.mock.calls.length).toBe(1);
  });