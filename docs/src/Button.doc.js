import * as React from 'react'
import PropTable from './components/PropTable'
import Example from './components/Example'
import PageHeader from './components/PageHeader'
import CardPage from './components/CardPage'

import { Box } from 'gestalt'
import { Button } from 'lib'

const cards = []
const card = c => cards.push(c)

card(<PageHeader name="Button" description="Work in progress" />)

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
    description="Primary Button"
    name="Primary Button"
    defaultCode={`
<Box maxWidth="8em">
  <Button text="Click Me" />
  <Button text="I'm disabled" disabled />
  <Button text="I'm active" active />
  <Button text="I'm inline" inline />
  <Button text="I'm inline" inline />
  <Button text="Submit Me" type="submit" />
</Box>`}
    scope={{ Box, Button }}
  />
)

export default () => <CardPage cards={cards} />
