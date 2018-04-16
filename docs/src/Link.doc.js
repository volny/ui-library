// @flow

import * as React from 'react'

import { Box } from 'gestalt'
import { Link, Text } from 'ui-library'

import PropTable from './components/PropTable'
import Example from './components/Example'
import PageHeader from './components/PageHeader'
import CardPage from './components/CardPage'

const cards = []
const card = c => cards.push(c)

card(
  <PageHeader
    name="Link"
    description="The Link component allows you to show links on the page, open them in a new window and change the color."
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
        name: 'href',
        type: 'string',
      },
      {
        name: 'inline',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'onClick',
        type: '({ event: SyntheticMouseEvent<> }) => void',
      },
      {
        name: 'target',
        type: `"null" | "self" | "blank"`,
        defaultValue: 'null',
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
  <Link href="https://diakrit.com">
    <Text>✘ Link(Text) will not be styled correctly</Text>
  </Link>

  <Text>
    <Link href="https://diakrit.com">
      ✓ Text(Link) will inherit the correct styling
    </Link>
  </Text>
</Box>
`}
    scope={{ Box, Link, Text }}
  />
)

card(
  <Example
    description="You can wrap anything else in a Link component to turn it into a link"
    name="Wrap other elements"
    defaultCode={`
<Box>
  <Link href="https://www.diakrit.com/news/happy-new-year-2018/" target="blank">
    <img style={{maxWidth: 350}} srcset="https://www.diakrit.com/wp-content/uploads/2018/03/2018-SNS-FB-min.jpg" alt="Happy New Year 2018!" />
  </Link>

  <Link href="https://diakrit.com">
    <svg width="30" height="30"
         viewBox="0 0 30 30"
         xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="30" height="30"/>
    </svg>
  </Link>

  <Link href="https://diakrit.com">
    <Box maxWidth="5em" minHeight="3em" color="darkGray">
    </Box>
  </Link>
</Box>
`}
    scope={{ Box, Link, Text }}
  />
)

card(
  <Example
    description="Instead of specifying a href you can pass your own click handler"
    name="Call a function on click"
    defaultCode={`
<Box>
  <Text>
    <Link onClick={() => {alert('hi there')}}>
      Click to say hi
    </Link>
  </Text>
</Box>
`}
    scope={{ Box, Link, Text }}
  />
)

export default () => <CardPage cards={cards} />
