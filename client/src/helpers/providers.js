import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/configureStore'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export const TestProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <DragDropContext onDragEnd={() => {}}>{children}</DragDropContext>
    </Provider>
  )
}
