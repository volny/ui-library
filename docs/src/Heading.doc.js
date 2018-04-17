// @flow

import * as React from 'react'

import { Box } from 'gestalt'
import { Heading } from 'lib'

import PropTable from './components/PropTable'
import Example from './components/Example'
import PageHeader from './components/PageHeader'
import CardPage from './components/CardPage'

const cards = []
const card = c => cards.push(c)

card(
  <PageHeader
    name="Heading"
    description="To create different level headings"
  />
)

card(
  <PropTable
    props={[
      {
        name: 'children',
        type: 'React.Node',
        required: true,
      },
      {
        name: 'color',
        type: `'darkGrey' | 'white' | 'green' | 'darkGrey70' | 'darkGrey30 | 'darkGrey10' | 'white90' | 'white30' | 'green30' | 'green20' | 'yellow' | 'red'`,
        defaultValue: 'darkGray',
      },
      {
        name: 'level',
        type: `'1' | '2' | '3' | '4' | '5' `,
        defaultValue: '1',
      },
    ]}
    heading={false}
  />
)

card(
  <Example
    description="Level hierarchy will create an h1 - h5 tag with corresponding styling"
    name="Levels"
    defaultCode={`
<Box>
  <Heading level="1">Some Heading</Heading>
  <Heading level="2">Some Heading</Heading>
  <Heading level="3">Some Heading</Heading>
  <Heading level="4">Some Heading</Heading>
  <Heading level="5">Some Heading</Heading>
</Box>
`}
    scope={{ Box, Heading }}
  />
)

card(
  <Example
    description="
    You can specify which color you want for your heading
  "
    name="Colors"
    defaultCode={`
<Box>
  <Heading level="2" color="darkGray">Dark Gray (default)</Heading>
  <Heading level="3" color="green">Diakrit Green</Heading>
  <Heading color="darkGrey70">Dark Grey Alpha 70</Heading>
</Box>`}
  />
)

export default () => <CardPage cards={cards} />

