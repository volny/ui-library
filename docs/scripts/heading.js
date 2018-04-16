#!/usr/bin/env node
/* eslint-env node */
/* eslint no-console:0 */

const { stylesheet, ruleset, atrule } = require('./cssbuilder')

const PRELUDE = `/*
This file was generated by running

  $ ${process.argv.join(' ')}

*/`
const SCALE = [1, 2, 3, 4, 5]

// --

const capitalize = str => `${str.substring(0, 1).toUpperCase()}${str.substring(1, str.length)}`

const classname = (namespace, className) =>
  namespace ? `.${namespace}${capitalize(className)}` : `.${className}`

const rules = (i, prefix) => [
  ruleset(classname(prefix, `fontSize${i}`), [['font-size', `var(--font-size-${i})`]]),
]

console.log(
  stylesheet(
    PRELUDE,
    [
      ruleset(':root', [
        ['--font-size-1', '24px'],
        ['--font-size-2', '36px'],
        ['--font-size-3', '48px'],
        ['--font-size-4', '64px'],
        ['--font-size-5', '96px'],
      ]),
      ruleset('.Heading', [
        ['composes', "antialiased sansSerif letterSpacing leadingSmall from '../Typography.css'"],
        ['margin-bottom', '0'],
        ['margin-top', '0'],
      ]),
    ].concat(
      SCALE.reduce((arr, i) => arr.concat(rules(i)), []),
      atrule('--sm', SCALE.reduce((arr, i) => arr.concat(rules(i, 'sm')), [])),
      atrule('--md', SCALE.reduce((arr, i) => arr.concat(rules(i, 'md')), [])),
      atrule('--lg', SCALE.reduce((arr, i) => arr.concat(rules(i, 'lg')), [])),
    ),
  ),
)
