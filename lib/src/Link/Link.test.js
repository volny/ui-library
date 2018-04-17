/**
 * @jest-environment node
 */

/* eslint-env jest */
import React from 'react'
import { create } from 'react-test-renderer'

import Link from './Link'

test('Link creates a link tag', () => {
  const tree = create(<Link href="https://example.com">Link</Link>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Link target blank works', () => {
  const tree = create(
    <Link href="https://example.com" target="blank">
      Link
    </Link>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Link onClick prop works', () => {
  const tree = create(<Link onClick={() => 'hola'}>Link</Link>).toJSON()
  expect(tree).toMatchSnapshot()
})
