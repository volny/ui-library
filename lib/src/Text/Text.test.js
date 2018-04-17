/**
 * @jest-environment node
 */

/* eslint-env jest */
import React from 'react'
import { create } from 'react-test-renderer'

import Text from './Text'

test('Text renders', () => {
  const tree = create(<Text>Text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Text inline creates a span instead of a p', () => {
  const tree = create(<Text inline>Text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Text italic creates italic text', () => {
  const tree = create(<Text italic>Text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('font-style', 'italic')
})

test('Text bold creates bold text', () => {
  const tree = create(<Text bold>Text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('font-weight', 'bold')
})

test('Text green adds green color', () => {
  const tree = create(<Text color="green">Text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('color', '#080')
})
