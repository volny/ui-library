import * as React from 'react'
import PropTable from './components/PropTable'
import Example from './components/Example'
import PageHeader from './components/PageHeader'
import CardPage from './components/CardPage'

import { Box } from 'gestalt'
import { Button } from 'lib'

const cards = []
const card = c => cards.push(c)

card(<PageHeader name="Button" description="Work in progress, only Primary Buttons implemented yet" />)

card(
  <PropTable
    props={[
      {
        name: 'active',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'inline',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'onClick',
        type: 'function',
      },
      {
        name: 'text',
        type: 'string',
        required: true,
      },
      {
        name: 'type',
        type: '"submit" | "button"',
        defaultValue: 'button',
      },
    ]}
    heading={false}
  />
)

card(
  <Example
    description="Primary Button can be in a number of different states"
    name="Primary Button States"
    defaultCode={`
<Box>
  <Box padding="1">
    <Button text="Click Me" />
  </Box>
  <Box padding="1">
    <Button text="I'm disabled" disabled />
  </Box>
  <Box padding="1">
    <Button text="I'm active" active/>
  </Box>
</Box>`}
    scope={{ Box, Button }}
  />
)

card(
  <Example
    description="Buttons can have a block or inline layout"
    name="Button Layouts"
    defaultCode={`
    <Box>
      <Box padding="1">
        <Button text="Block" />
        <Button text="Block" />
      </Box>
      <Box padding="1">
        <Button text="Inline" inline />
        <Button text="Inline" inline />
      </Box>
    </Box>`}
    scope={{ Box, Button }}
  />
)

card(
  <Example
    description="Button can perform different actions of click"
    name="Button Actions"
    defaultCode={`
    <Box>
      <Box padding="1">
        <Button text="Submit Me" type="submit" />
      </Box>
      <Box padding="1">
        <Button text="Alert Me" onClick={() => {alert('hi')}} />
      </Box>
    </Box>`}
    scope={{ Box, Button }}
  />
)

export default () => <CardPage cards={cards} />
