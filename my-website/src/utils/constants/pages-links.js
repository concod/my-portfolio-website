export const URL = Object.freeze({
  NAME: 'name',
})

export const PAGES = Object.freeze({
  HOME: '/home',
  GAMES: '/games',
  LANDING_PAGES: '/landing-pages',
  STORY_BOOK: '/storybook',
  WEB_APPS: '/webapps',
  WORK: '/work',
  // Landing pages - sub pages
  LANDING_PAGES_VIEW: `/landing-pages/:${URL.NAME}`,
  // Games sub pages
  GAMES_VIEW: `/games/:${URL.NAME}`,
  // Web app sub pages
  WEB_APPS_VIEW: `/web-apps/:${URL.NAME}`,
  // Storybook - sub pages
  STORY_BOOK_VIEW: `/storybook/:${URL.NAME}`,
  // Work sub pages
  WORK_VIEW: `/work/:${URL.NAME}`,
})
