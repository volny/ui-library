// @flow
import * as React from 'react'
import PropTable from './components/PropTable'
import Example from './components/Example'
import PageHeader from './components/PageHeader'
import CardPage from './components/CardPage'

const cards = []
const card = c => cards.push(c)

card(<PageHeader name="Text" description="Should be used for all text paragraphs on all pages" />)

card(
  <PropTable
    props={[
      {
        name: 'align',
        type: `"left" | "right" | "center" | "justify"`,
        defaultValue: 'left',
      },
      {
        name: 'bold',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'caption',
        type: 'boolean',
        defaultValue: false,
      },
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
        name: 'inline',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'italic',
        type: 'boolean',
        defaultValue: false,
      },
    ]}
    heading={false}
  />
)

card(
  <Example
    description="
    You can apply the following to adjust the positioning of text within wrapper elements.
  "
    name="Alignment"
    defaultCode={`
<Box maxWidth="8em">
  <Text align="left">Left (default)</Text>
  <Text align="right">Right</Text>
  <Text align="center">Center</Text>
  <Text align="justify">Justify</Text>
</Box>`}
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
