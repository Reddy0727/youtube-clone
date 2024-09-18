import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ExploreIcon from '@mui/icons-material/Explore';
import React from 'react';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';

export const mainLinks = [
    {
      icon: React.createElement(HomeIcon, { style: { fontSize: 22 } }),
      name: "Home",
    },
    {
      icon: React.createElement(ExploreIcon, { style: { fontSize: 22 } }),
      name: "Explore",
    },
    {
      icon: React.createElement(SubscriptionsIcon, { style: { fontSize: 22 } }),
      name: "Subscriptions",
    },
  ];
  export const secondaryLinks = [
    {
      icon: React.createElement(VideoLibraryIcon, { style: { fontSize: 22 } }),
      name: "Library",
    },
    {
      icon: React.createElement(HistoryIcon, { style: { fontSize: 22 } }),
      name: "History",
    },
    {
      icon: React.createElement(SlideshowIcon, { style: { fontSize: 22 } }),
      name: "Your Videos",
    },
    {
      icon: React.createElement(WatchLaterIcon, { style: { fontSize: 22 } }),
      name: "Watch Later",
    },
    {
      icon: React.createElement(ThumbUpIcon, { style: { fontSize: 22 } }),
      name: "Liked Videos",
    },
  ];
  export const helpLinks = [
    {
      icon: React.createElement(SettingsIcon, { style: { fontSize: 22 } }),
      name: "Settings",
    },
    {
      icon: React.createElement(SettingsBackupRestoreIcon, { style: { fontSize: 22 } }),
      name: "Report history",
    },
    {
      icon: React.createElement(HelpOutlineIcon, { style: { fontSize: 22 } }),
      name: "Help",
    },
    {
      icon: React.createElement(FeedbackIcon, { style: { fontSize: 22 } }),
      name: "Send feedback",
    },
  ];

  export const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];
