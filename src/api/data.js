import {
  Avatar01,
  BadgeAgeS,
  BadgeBlankS,
  BadgeCaffeinatedS,
  BadgeGoldS,
  BadgeWarriorS,
  Cover01,
} from './data/images';
export const data = {
  coverPhoto: Cover01,
  description: {
    title: 'Marina Valentine',
    text: 'www.gamehuntress.com',
    badgeText: 24,
    avatar: Avatar01,
  },
  badges: [
    { src: BadgeGoldS, alt: 'badge-gold-s' },
    { src: BadgeAgeS, alt: 'badge-age-s' },
    { src: BadgeCaffeinatedS, alt: 'badge-caffeinated-s' },
    { src: BadgeWarriorS, alt: 'badge-warrior-s' },
    {
      src: BadgeBlankS,
      alt: 'badge-blank-s',
      href: 'profile-badges.html',
      num: '+9',
    },
  ],
  stats: [
    { stat: 'posts', count: 930 },
    { stat: 'friends', count: 82 },
    { stat: 'visits', count: '5.7k' },
  ],
};
console.log(data);
