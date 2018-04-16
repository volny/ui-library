// @flow

import * as React from 'react'

import { Box } from 'gestalt'
import { Heading } from 'ui-library'

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
    ]}
    heading={false}
  />
)

card(
  <Example
    description="If you want your link to be text you should wrap a Link component inside of a Text component."
    name="Text styling"
    defaultCode={`
<Box>
  <Heading level="3">Some Heading</Heading>
</Box>
`}
    scope={{ Box, Heading }}
  />
)

export default () => <CardPage cards={cards} />

