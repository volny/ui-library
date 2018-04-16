/**
 * @jest-environment node
 */

import React from 'react'
import { create } from 'react-test-renderer'
import Heading from './Heading'

test('Heading h1', () => {
  const tree = create(<Heading>h</Heading>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading h2', () => {
  const tree = create(<Heading level="2">h</Heading>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading with color and level 3', () => {
  const tree = create(<Heading level="3" color="yellow">h</Heading>).toJSON()
  expect(tree).toMatchSnapshot()
})
