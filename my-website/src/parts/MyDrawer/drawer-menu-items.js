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
import { PAGES } from 'utils/constants/pages-links'

export const drawerMenuItems = [
  {
    title: 'landing pages',
    icon: <WebRounded />,
    subMenuItems: [
      {
        title: 'Homestay',
        link: PAGES.LANDING_PAGES_VIEW,
      },
      {
        title: 'Nestaway',
        link: PAGES.LANDING_PAGES_VIEW,
      },
    ],
  },
  {
    title: 'work',
    icon: <WorkRounded />,
    subMenuItems: [
      {
        title: 'Company A',
        link: PAGES.WORK_VIEW,
      },
      {
        title: 'Company B',
        link: PAGES.WORK_VIEW,
      },
    ],
  },
  {
    title: 'storybook',
    icon: <ImportContacts />,
    subMenuItems: [
      {
        title: 'Component one',
        link: PAGES.STORY_BOOK_VIEW,
      },
      {
        title: 'Component Two',
        link: PAGES.STORY_BOOK_VIEW,
      },
      {
        title: 'Component Three',
        link: PAGES.STORY_BOOK_VIEW,
      },
    ],
  },
  {
    title: 'games',
    icon: <SportsEsportsRounded />,
    subMenuItems: [
      {
        title: 'Tetris',
        link: PAGES.GAMES_VIEW,
      },
      {
        title: 'Scrambled',
        link: PAGES.GAMES_VIEW,
      },
      {
        title: 'Cricket',
        link: PAGES.GAMES_VIEW,
      },
    ],
  },
  {
    title: 'web apps',
    icon: <TabletMacRounded />,
    subMenuItems: [
      {
        title: 'Github Profile Viewer',
        link: PAGES.WEB_APPS_VIEW,
      },
      {
        title: 'Slack',
        link: PAGES.WEB_APPS_VIEW,
      },
    ],
  },
]

export const leftBarTopItemSet = [
  {
    title: 'Home',
    icon: <HomeRounded fontSize='inherit' />,
    link: PAGES.HOME,
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
