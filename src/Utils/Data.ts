import {AllFeed, AllMusic, AllExplore} from '../Navigations/tabNavigation';

import {Font} from './font';

export const UserNavData = [
  {com: AllFeed, icon: 'feed', name: 'Feeds', dif: true},
  {com: AllExplore, icon: 'video-library', name: 'Explore', dif: true},
  {com: AllMusic, icon: 'musical-notes', name: 'Music'},
];

export const OverboardButton = [
  {title: 'Get Started', path: 'register', reverse: true},
  {title: 'I already have an account', path: 'login', reverse: false},
];

export const ThemeData = [
  {label: 'Dark Theme'},
  {label: 'Light Theme'},
  {label: 'Device Apparance', isSub: true},
];

export const LoginInput = [
  {icon: 'email', p: 'Email', name: 'email', def: 'johnmark@gmail.com'},
  {
    icon: 'form-textbox-password',
    p: 'Password',
    name: 'password',
    def: '12345678',
  },
];
export const ChangePasswordInput = [
  {p: 'Password', name: 'password'},
  {p: 'Confirm Password', name: 'c_password'},
];

export const RegisterInput = [
  {icon: 'account', p: 'Full Name', name: 'name'},
  {icon: 'email', p: 'Email', name: 'email'},
  {icon: 'phone', p: 'Phone Number', name: 'number'},
  {
    icon: 'form-textbox-password',
    p: 'Password',
    name: 'password',
    pw: true,
  },
  {
    icon: 'form-textbox-password',
    p: 'Confirm Password',
    name: 'c_password',
    pw: true,
  },
];

export const fontConfig = {
  ios: {
    regular: {
      fontFamily: Font.font400,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: Font.font500,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: Font.font300,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: Font.font200,
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: Font.font400,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: Font.font500,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: Font.font300,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: Font.font200,
      fontWeight: 'normal',
    },
  },
};

export const WPSwitchData = [
  {title: 'Picture', id: 1},
  {title: 'Live', id: 2},
  {title: 'Catagory', id: 3},
];
export const ImageData = [
  {
    source:
      'https://i.pinimg.com/564x/55/3f/4e/553f4e3fbf3913599124644216c40dd7.jpg',
  },
  {
    source:
      'https://wallpapers-clan.com/wp-content/uploads/2024/02/chainsaw-man-red-wallpaper-pr.jpg',
  },
  {
    source:
      'https://w0.peakpx.com/wallpaper/1005/847/HD-wallpaper-tobirama-senju-naruto-uchiha-ninja-shippuden-leaf-hashirama.jpg',
  },
  {
    source:
      'https://i.pinimg.com/736x/66/b1/ef/66b1ef0bafc477214d39f0f525e1bbd3.jpg',
  },
  {
    source:
      'https://e0.pxfuel.com/wallpapers/701/317/desktop-wallpaper-minato-namikaze-naruto-shippuden-naruto-lock.jpg',
  },
  {
    source:
      'https://wallpapers.com/images/hd/aesthetic-hashirama-phone-kxn8w33rvj35pet3.jpg',
  },
  {
    source:
      'https://e0.pxfuel.com/wallpapers/169/815/desktop-wallpaper-madara-uchiha-top-45-best-madara-uchiha-background-madara-mobile-thumbnail.jpg',
  },
  {
    source:
      'https://w0.peakpx.com/wallpaper/417/876/HD-wallpaper-obito-naruto.jpg',
  },
  {
    source:
      'https://wallpapers.com/images/featured/kakashi-iphone-58r3iimem1417ebe.jpg',
  },
  {
    source:
      'https://wallpapers.com/images/featured/kakashi-iphone-58r3iimem1417ebe.jpg',
  },{
    source:
      'https://wallpapers.com/images/featured/kakashi-iphone-58r3iimem1417ebe.jpg',
  },{
    source:
      'https://wallpapers.com/images/featured/kakashi-iphone-58r3iimem1417ebe.jpg',
  },{
    source:
      'https://wallpapers.com/images/featured/kakashi-iphone-58r3iimem1417ebe.jpg',
  },{
    source:
      'https://wallpapers.com/images/featured/kakashi-iphone-58r3iimem1417ebe.jpg',
  },{
    source:
      'https://wallpapers.com/images/featured/kakashi-iphone-58r3iimem1417ebe.jpg',
  },{
    source:
      'https://wallpapers.com/images/featured/kakashi-iphone-58r3iimem1417ebe.jpg',
  },{
    source:
      'https://wallpapers.com/images/featured/kakashi-iphone-58r3iimem1417ebe.jpg',
  },{
    source:
      'https://wallpapers.com/images/featured/kakashi-iphone-58r3iimem1417ebe.jpg',
  },
];

export const SingerProfileData = [
  {
    title: 'justin bieber',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjE1NjMxMDUyM15BMl5BanBnXkFtZTgwODMzNDM1NTE@._V1_.jpg',
  },
  {
    title: 'One Direction',
    image:
      'https://www.onedirectionmusic.com/assets/images/hero-2015-rect-med.jpg',
  },
];
