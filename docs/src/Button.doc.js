import * as React from 'react'
import PropTable from './components/PropTable'
import Example from './components/Example'
import PageHeader from './components/PageHeader'
import CardPage from './components/CardPage'

import { Box } from 'gestalt'
import { Button } from 'lib'

const cards = []
const card = c => cards.push(c)

card(<PageHeader name="Button" description="It's a " />)

card(
  <PropTable
    props={[
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
    description="It's the Primary Button"
    name="Primary Button"
    defaultCode={`
<Box maxWidth="8em">
  <Button text="Click Me" />
  <Button text="Click Me" disabled />
  <Button text="Click Me" inline />
  <Button text="Click Me" inline />
  <Button text="Submit Me" type="submit" />
</Box>`}
    scope={{ Box, Button }}
  />
)

card(
  <Example
    description={`
    The Text component allows you to specifiy whether you want \`block\` or \`inline\` text.
  `}
    name="Block vs inline"
    defaultCode={`
<Box>
  <Text>Some content in a default block element. (default)</Text>
  <Text inline>Inline text with the inline prop.</Text>
  {' '}
  <Text inline>More inline text.</Text>
</Box>`}
  />
)

card(
  <Example
    description="
    You can specify which color you want for your text.
  "
    name="Colors"
    defaultCode={`
<Box>
  <Text color="darkGray">Dark Gray (default)</Text>
  <Text color="green">Diakrit Green</Text>
  <Text color="darkGrey70">Dark Grey Alpha 70</Text>
  <Box color="darkGray" maxWidth="8em">
    <Text color="white">White</Text>
  </Box>
</Box>`}
  />
)

card(
  <Example
    description="
    Text can be styled as a <code>caption</code> for subscripts and annotations.
  "
    name="Caption"
    defaultCode={`
<Box>
  <Text>Default Text</Text>
  <Text caption>Text Caption</Text>
</Box>`}
  />
)

card(
  <Example
    description="
    There are multiple styles such as bold and italic that we can
    attach to the Text component.
  "
    name="Styles"
    defaultCode={`
<Box>
  <Text bold>Bold</Text>
  <Text italic>Italic</Text>
  <Text italic bold caption color="yellow">Heavily styled Text</Text>
</Box>`}
  />
)

export default () => <CardPage cards={cards} />
