import { DRAWER_CONST } from 'utils/constants/drawer-constants'

export const THEME_CUSTOM_PROPS = {
  layout: {
    leftBarWidth: DRAWER_CONST.sideWidth,
    expandedDrawerWidth:
      DRAWER_CONST.sideWidth +
      DRAWER_CONST.containerWidth +
      DRAWER_CONST.paddingLeftRight,
    collapsedDrawerWidth:
      DRAWER_CONST.sideWidth +
      DRAWER_CONST.paddingLeftRight / 2 +
      DRAWER_CONST.listMargin,
  },
}
