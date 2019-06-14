const Constants = {
  FIRST_RUN_PAGE_WELCOME: 'welcome',
  FIRST_RUN_PAGE_EMAIL_COLLECT: 'email-collect',
  FIRST_RUN_PAGE_EMAIL_VERIFY: 'email-verify',
  FIRST_RUN_PAGE_WALLET: 'wallet',
  FIRST_RUN_PAGE_SKIP_ACCOUNT: 'skip-account',

  VERIFY_PAGE_EMAIL: 'email-verify',
  VERIFY_PAGE_PHONE_NUMBER: 'phone-number-verify',

  PHASE_COLLECTION: 'collection',
  PHASE_VERIFICATION: 'verification',

  PHASE_SELECTOR: 'selector',
  PHASE_DETAILS: 'details',

  CONTENT_TAB: 'content',
  ABOUT_TAB: 'about',

  KEY_FIRST_RUN_EMAIL: 'firstRunEmail',
  KEY_FIRST_RUN_PASSWORD: 'firstRunPassword',
  KEY_FIRST_USER_AUTH: 'firstUserAuth',
  KEY_SHOULD_VERIFY_EMAIL: 'shouldVerifyEmail',
  KEY_EMAIL_VERIFY_PENDING: 'emailVerifyPending',

  SETTING_ALPHA_UNDERSTANDS_RISKS: 'alphaUnderstandRisks',
  SETTING_SUBSCRIPTIONS_VIEW_MODE: 'subscriptionsViewMode',
  SETTING_RATING_REMINDER_LAST_SHOWN: 'ratingReminderLastShown',
  SETTING_RATING_REMINDER_DISABLED: 'ratingReminderDisabled',
  SETTING_BACKUP_DISMISSED: 'backupDismissed',
  SETTING_REWARDS_NOT_INTERESTED: 'rewardsNotInterested',
  SETTING_DEVICE_WALLET_SYNCED: 'deviceWalletSynced',

  ACTION_DELETE_COMPLETED_BLOBS: 'DELETE_COMPLETED_BLOBS',
  ACTION_FIRST_RUN_PAGE_CHANGED: 'FIRST_RUN_PAGE_CHANGED',

  ACTION_PUSH_DRAWER_STACK: 'PUSH_DRAWER_STACK',
  ACTION_POP_DRAWER_STACK: 'POP_DRAWER_STACK',
  ACTION_SET_PLAYER_VISIBLE: 'SET_PLAYER_VISIBLE',

  ACTION_REACT_NAVIGATION_RESET: 'Navigation/RESET',
  ACTION_REACT_NAVIGATION_NAVIGATE: 'Navigation/NAVIGATE',
  ACTION_REACT_NAVIGATION_REPLACE: 'Navigation/REPLACE',

  PAGE_REWARDS: 'rewards',
  PAGE_SETTINGS: 'settings',
  PAGE_TRENDING: 'trending',
  PAGE_WALLET: 'wallet',

  DRAWER_ROUTE_DISCOVER: 'Discover',
  DRAWER_ROUTE_TRENDING: 'Trending',
  DRAWER_ROUTE_SUBSCRIPTIONS: 'Subscriptions',
  DRAWER_ROUTE_MY_LBRY: 'Downloads',
  DRAWER_ROUTE_PUBLISH: 'Publish',
  DRAWER_ROUTE_REWARDS: 'Rewards',
  DRAWER_ROUTE_WALLET: 'Wallet',
  DRAWER_ROUTE_SETTINGS: 'Settings',
  DRAWER_ROUTE_ABOUT: 'About',
  DRAWER_ROUTE_SEARCH: 'Search',
  DRAWER_ROUTE_TRANSACTION_HISTORY: 'TransactionHistory',

  FULL_ROUTE_NAME_DISCOVER: 'DiscoverStack',
  FULL_ROUTE_NAME_TRENDING: 'TrendingStack',
  FULL_ROUTE_NAME_MY_SUBSCRIPTIONS: 'MySubscriptionsStack',
  FULL_ROUTE_NAME_WALLET: 'WalletStack',
  FULL_ROUTE_NAME_MY_LBRY: 'MyLBRYStack',

  ROUTE_FILE: 'File',

  SUBSCRIPTIONS_VIEW_ALL: 'view_all',
  SUBSCRIPTIONS_VIEW_LATEST_FIRST: 'view_latest_first',

  PLAY_STORE_URL: 'https://play.google.com/store/apps/details?id=io.lbry.browser',
  RATING_REMINDER_INTERVAL: 604800, // 7 days (7 * 24 * 3600s)
};

export default Constants;

export const DrawerRoutes = [
  Constants.DRAWER_ROUTE_DISCOVER,
  Constants.DRAWER_ROUTE_TRENDING,
  Constants.DRAWER_ROUTE_SUBSCRIPTIONS,
  Constants.DRAWER_ROUTE_MY_LBRY,
  Constants.DRAWER_ROUTE_REWARDS,
  Constants.DRAWER_ROUTE_WALLET,
  Constants.DRAWER_ROUTE_SETTINGS,
  Constants.DRAWER_ROUTE_ABOUT,
  Constants.DRAWER_ROUTE_SEARCH,
  Constants.DRAWER_ROUTE_TRANSACTION_HISTORY,
];
