import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button } from '@material-ui/core'
import { ColorLensRounded } from '@material-ui/icons'

import * as THEMES from 'styles/themes'
import myStyle from 'styles/makeMyStyle'

import THEMES_KEYS from 'utils/constants/theme-keys'

const trayWidth = 130

const setMarginsFor = () => {
  const length = Object.keys(THEMES).length - 1
  if (length % 4 === 0) return length - 4
  else return length - (length % 4)
}

const ThemePalleteTray = () => {
  const classes = myStyle
  const dispatch = useDispatch()
  const [shiftLeft, setShiftLeft] = useState(false)
  const [enteredPallete, setEnteredPallete] = useState(true)
  const marginBelow = useMemo(() => setMarginsFor(), [])

  return (
    <Box
      display="flex"
      alignItems="center"
      position="fixed"
      right={shiftLeft ? '0px' : '-130px'}
      style={{ transition: 'all 0.2s ease' }}
      zIndex={20}>
      <ColorLensRounded
        style={{ cursor: 'pointer' }}
        className={classes({ fs: 30 })}
        onMouseEnter={() => setShiftLeft(true)}
        onMouseLeave={() => !enteredPallete && setShiftLeft(false)}
      />
      <Box
        onMouseEnter={() => setShiftLeft(true)}
        onMouseLeave={() => {
          setEnteredPallete(false)
          setShiftLeft(false)
        }}
        bgcolor="red"
        display="flex"
        alignContent="flex-start"
        height="fit-content"
        padding="10px"
        width={trayWidth}
        flexWrap="wrap">
        {Object.entries(THEMES).map(
          ([key, value], index) =>
            key !== THEMES_KEYS.DARK && (
              <Button
                key={value.key}
                onClick={() => dispatch(value.action())}
                className={classes({
                  pa: 10,
                  mr: index % 4 !== 0 && 7,
                  mb: index <= marginBelow && 10,
                  mw: 0,
                  bg: value.palette.primary.main,
                  hvBg: value.palette.primary.main,
                  hvSc: 1.07,
                  avSc: 1,
                })}
                variant="outlined"
              />
            ),
        )}
      </Box>
    </Box>
  )
}

export default ThemePalleteTray
