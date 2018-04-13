#!/usr/bin/env node

/* eslint-env node */
/* eslint no-console:0 */

const PRELUDE = `/*
This file was generated by running

  $ ${process.argv.join(' ')}

*/`;
const SCALE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// --

const bt = n => `calc(var(--bt) * ${n})`;
const block = str =>
  [
    '{',
    str
      .split('\n')
      .map(line => (line.length === 0 ? '' : `  ${line}`))
      .join('\n'),
    '}',
  ].join('\n');

const Declaration = ({ property, value }) => `${property}: ${value};`;

const Ruleset = ({ selector, declarations }) =>
  `${selector} ${block(
    Object.keys(declarations)
      .reduce(
        (arr, property) =>
          arr.concat(Declaration({ property, value: declarations[property] })),
        []
      )
      .join('\n')
  )}`;

const AtRule = ({ query, rulesets }) =>
  `@media (${query}) ${block(rulesets.map(Ruleset).join('\n\n'))}`;

const Statement = obj => {
  switch (obj.kind) {
    case 'ruleset':
      return Ruleset(obj);
    case 'atrule':
      return AtRule({ query: obj.query, rulesets: obj.rulesets });
    default:
      throw new Error(`Unexpected statement kind ${obj.kind}`);
  }
};

const Stylesheet = statements =>
  [PRELUDE].concat(statements.map(Statement)).join('\n\n');

// --

const ruleset = (selector, declarations) => ({
  kind: 'ruleset',
  selector,
  declarations,
});

const atrule = (query, rulesets) => ({
  kind: 'atrule',
  query,
  rulesets,
});

const capitalize = str =>
  `${str.substring(0, 1).toUpperCase()}${str.substring(1, str.length)}`;
const classname = (namespace, className) =>
  namespace ? `.${namespace}${capitalize(className)}` : `.${className}`;

const rules = (i, prefix) => [
  ruleset(classname(prefix, `marginTop${i}`), {
    'margin-top': bt(i),
  }),
  ruleset(classname(prefix, `marginRight${i}`), {
    'margin-right': bt(i),
  }),
  ruleset(classname(prefix, `marginBottom${i}`), {
    'margin-bottom': bt(i),
  }),
  ruleset(classname(prefix, `marginLeft${i}`), {
    'margin-left': bt(i),
  }),

  ruleset(classname(prefix, `marginTopN${i}`), {
    'margin-top': bt(-i),
  }),
  ruleset(classname(prefix, `marginRightN${i}`), {
    'margin-right': bt(-i),
  }),
  ruleset(classname(prefix, `marginBottomN${i}`), {
    'margin-bottom': bt(-i),
  }),
  ruleset(classname(prefix, `marginLeftN${i}`), {
    'margin-left': bt(-i),
  }),

  ruleset(classname(prefix, `paddingY${i}`), {
    'padding-bottom': bt(i),
    'padding-top': bt(i),
  }),

  ruleset(classname(prefix, `paddingX${i}`), {
    'padding-left': bt(i),
    'padding-right': bt(i),
  }),
];

console.log(
  Stylesheet(
    [
      ruleset(':root', {
        '--bt': '4px',
      }),
    ].concat(
      SCALE.reduce((arr, i) => arr.concat(rules(i)), []),
      atrule('--sm', SCALE.reduce((arr, i) => arr.concat(rules(i, 'sm')), [])),
      atrule('--md', SCALE.reduce((arr, i) => arr.concat(rules(i, 'md')), [])),
      atrule('--lg', SCALE.reduce((arr, i) => arr.concat(rules(i, 'lg')), []))
    )
  )
);
