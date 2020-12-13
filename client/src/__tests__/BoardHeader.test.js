import React from 'react'
import { render } from '@testing-library/react'
import BoardHeader from '../components/BoardHeader'
import renderer from 'react-test-renderer'
import { TestProvider } from '../helpers/providers'

it('should display correctly BoardHeader', async () => {
  const { getByText, getByTestId } = render(
    <TestProvider>
      <BoardHeader
        title= 'table1'
        showEditable={() => {}}
      />
    </TestProvider>
  )

  const table = getByText('table1')
  expect(window.getComputedStyle(table).display).toEqual('block')
});

it('should check snapshot for BoardHeader', () => {
  const tree = renderer
    .create(
      <TestProvider>
        <BoardHeader
          title='table1'
          showEditable={() => {}}
        />
      </TestProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
