import {
  AccountCircleRounded,
  ColorLensRounded,
  HomeRounded,
  ImportContacts,
  SearchRounded,
  SportsEsportsRounded,
  TabletMacRounded,
  WebRounded,
  WorkRounded,
} from '@material-ui/icons'

export const drawerMenuItems = [
  {
    title: 'landing pages',
    icon: <WebRounded />,
    subMenuItems: [
      {
        title: 'gBC',
      },
      {
        title: 'cd',
      },
      {
        title: 'ef',
      },
    ],
  },
  {
    title: 'work',
    icon: <WorkRounded />,
    subMenuItems: [
      {
        title: 'gh',
      },
      {
        title: 'oj',
      },
      {
        title: 'kl',
      },
    ],
  },
  {
    title: 'storybook',
    icon: <ImportContacts />,
    subMenuItems: [
      {
        title: 'mn',
      },
      {
        title: 'ol',
      },
      {
        title: 'kC',
      },
    ],
  },
  {
    title: 'games',
    icon: <SportsEsportsRounded />,
    subMenuItems: [
      {
        title: 'pllC',
      },
      {
        title: 'Add',
      },
      {
        title: 'dd',
      },
    ],
  },
  {
    title: 'web apps',
    icon: <TabletMacRounded />,
    subMenuItems: [
      {
        title: 'dd',
      },
      {
        title: 'ABddC',
      },
      {
        title: 'ABkk',
      },
    ],
  },
]

export const leftBarTopItemSet = [
  {
    title: 'Home',
    icon: <HomeRounded fontSize='inherit' />,
  },
  {
    title: 'Search',
    icon: <SearchRounded fontSize='inherit' />,
  },
]

export const leftBarBottomItemSet = [
  {
    title: 'Theme',
    icon: <ColorLensRounded fontSize='inherit' />,
  },
  {
    title: 'Avatar',
    icon: <AccountCircleRounded fontSize='inherit' />,
  },
]
