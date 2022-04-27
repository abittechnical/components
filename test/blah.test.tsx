import React from 'react'
import { createRoot } from 'react-dom/client'
import { Default as Thing } from '../src/components/Thing/Thing.stories'

describe('Thing', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<Thing />)
    root.unmount()
  })
})
