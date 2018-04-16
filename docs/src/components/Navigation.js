// @flow
import React from 'react'
import SVGInline from 'react-svg-inline'
import { Text, Box, SelectList, Link } from 'gestalt'
import routes from '../routes'

type Props = {|
  history: *,
|}

const isLeftClickEvent = event => event.button === 0
const isModifiedEvent = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

const components = Object.keys(routes)

export default function Navigation(props: Props) {
  const { history } = props
  const links = components.map(ns => {
    const href = `/${ns}`
    const handleClick = ({ event }) => {
      if (event.defaultPrevented) return
      if (isModifiedEvent(event) || !isLeftClickEvent(event)) return
      event.preventDefault()
      history.push(href)
    }
    return (
      <Text bold leading="tall" color="darkGray" size="lg">
        <Link href={href} onClick={handleClick}>
          {ns}
        </Link>
      </Text>
    )
  })
  const options = [{ label: '-', value: '#' }].concat(
    components.map(ns => ({
      label: ns,
      value: `/${ns}`,
    })),
  )
  const m = window.location.hash.match(/#(\/[\w]+)/)

  const diakritLogo = `<svg width="140px" height="25px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1429.03 261.4"><defs><style>.cls-1{fill:#373232;}</style></defs><title>diakrit-logo</title><polygon class="cls-1" points="1226.42 0.34 1226.42 46.08 1303.02 46.08 1303.02 261.39 1352.43 261.39 1352.43 46.08 1429.03 46.08 1429.03 0.34 1226.42 0.34 1226.42 0.34"/><polygon class="cls-1" points="269 261.4 318.05 261.4 318.05 0.34 269 0.34 269 261.4 269 261.4"/><polygon class="cls-1" points="1148.96 261.4 1197.99 261.4 1197.99 0.34 1148.96 0.34 1148.96 261.4 1148.96 261.4"/><polygon class="cls-1" points="505.41 0 615.3 261.39 562.8 261.39 562.32 260.23 480.17 59.36 440.52 155.41 484.9 155.41 502.44 199.28 423.01 199.28 397.54 261.39 346.44 261.39 456.39 0 505.41 0 505.41 0"/><path class="cls-1" d="M1117.09,261.4h-58l-.56-.82-62.62-88.83H975v-43.9h31.44c31.45,0,51-15.88,51-41.44,0-26.48-18.24-41.06-51.36-41.06h-56.4V261.4h-49V.34h109.11c60.11,0,97.47,32,97.47,83.5,0,39.61-21.34,67.7-60.15,79.37l70,98.19Z"/><polygon class="cls-1" points="803.91 0.34 689.76 126.77 689.76 0.34 640.48 0.34 640.48 261.39 689.76 261.39 689.76 185.66 726.19 146.48 809.06 261.39 868.4 261.39 760.43 112.29 864.5 0.34 803.91 0.34 803.91 0.34"/><path class="cls-1" d="M90.38,261.4H75v-45l15.34,0c51.45,0,87.37-35.32,87.37-85.91,0-50.92-35.11-85.14-87.37-85.14H49V261.4H0V.34H90.38C170.7.34,229,55.39,229,131.23,229,206.65,170.7,261.4,90.38,261.4"/><path class="cls-1" d="M90.38,261.4H75v-45l15.34,0c51.45,0,87.37-35.32,87.37-85.91,0-50.92-35.11-85.14-87.37-85.14H49V261.4H0V.34H90.38C170.7.34,229,55.39,229,131.23,229,206.65,170.7,261.4,90.38,261.4"/></svg>
`

  return (
    <Box>
      <Box mdDisplay="none" flex="grow">
        <SelectList
          id="nav"
          onChange={({ value }) => history.push(value)}
          options={options}
          value={(m && m[1]) || '#'}
        />
      </Box>
      <Box display="none" mdDisplay="flex" direction="column" flex="grow">
        <Box
          marginBottom={4}
          display="flex"
          direction="row"
          alignItems="center"
          marginLeft={-1}
          marginRight={-1}
        >
          <Box paddingX={1}>
            <SVGInline svg={diakritLogo} />
          </Box>
        </Box>
        <Box role="list">
          {links.map((link, i) => (
            <Box role="listitem" key={i}>
              {link}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
