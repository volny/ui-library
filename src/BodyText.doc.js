// @flow
import * as React from 'react';
import PropTable from './components/PropTable';
import Example from './components/Example';
import PageHeader from './components/PageHeader';
import CardPage from './components/CardPage';

const cards = [];
const card = c => cards.push(c);

card(
  <PageHeader
    name="BodyText"
    description="Should be used for all text paragraphs on all pages"
  />
);

card(
  <PropTable
    props={[
      {
        name: 'text',
        type: 'string',
        required: true,
        description:
          'Components text goes here',
        defaultValue: `secondaryColor`,
      },
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
        name: 'italic',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'inline',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'size',
        type: `"xs" | "sm" | "md" | "lg" | "xl"`,
        description: `xs: 12px, sm: 14px, md: 16px, lg: 18px, xl: 21px`,
        defaultValue: 'md',
      },
      {
        name: 'color',
        type: 'string',
        required: false,
        description:
          'Text color if different from `secondaryColor` value provided from backend',
        defaultValue: `secondaryColor`,
      },
    ]}
    heading={false}
  />
);

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
);

card(
  <Example
    description="
    There are multiple styles such as bold and italic that we can
    attach to the Text component.
  "
    name="Styles"
    defaultCode={`
<Box>
<Box marginBottom={2}>
  <Text bold>Bold</Text>
</Box>
<Box marginBottom={2}>
  <Text italic>Italic</Text>
</Box>
</Box>`}
  />
);

export default () => <CardPage cards={cards} />;

