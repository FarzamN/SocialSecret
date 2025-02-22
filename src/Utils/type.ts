import {ReactNode} from 'react';
import {
  GestureResponderEvent,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  ImageURISource,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  Control,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
} from 'react-hook-form';
import {TextInputLabelProp} from 'react-native-paper/lib/typescript/components/TextInput/types';
import {IconType} from 'react-native-dynamic-vector-icons';

export type CustomButtonProps = {
  onPress?: () => void;
  loader?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  white?: boolean;
  to?: boolean;
  icon?: boolean;
  isMarginTop?: boolean;
  Google?: boolean;
  marginTop?: number | 'auto' | `${number}%`;
  round?: boolean;
  small?: boolean;
  title: string;
  name?: any;
  type?: any;
  color?: string;
  textRestyle?: false | StyleProp<ViewStyle> | StyleProp<TextStyle>;
};

export type OutlineButtonProps = {
  center?: boolean;
  onPress?: () => void;
  title: string;
  marginTop?: number ;
};

export type BodyProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export type ImageBackgroundType = {
  children: ReactNode;
  between?: boolean;
};
export type HeadingType = {
  text: string;
  style?: StyleProp<TextStyle>;
  center?: boolean;
  marginTop?: number;
  numberOfLines?: number;
};

export type MainInputType = {
  Container?: StyleProp<ViewStyle>;
  defaultValue?: string;
  name?: string;
  control?: Control<FieldValues>;
  rules?: RegisterOptions;
  onFocus?: () => void;
  multiline?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  password?: boolean;
  label?: TextInputLabelProp;
  maxLength?: number | undefined;
  restyle?: StyleProp<TextStyle>;
  icon?: any;
  isIcon?: boolean;
  isError?: boolean | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  message?: string | object | any;
  outlined?: boolean;
  small?: boolean;
};

export type ValidationType = {
  isError: boolean | object;
  message: string | object | any;
  mh?: number;
};
export type ImageType = {
  source: ImageSourcePropType;
  onPress?: () => void;
};

export type ImagePicType = {
  isVisible: boolean;
  onClose: () => void;
  PressPicture: () => void;
  PressCamera: () => void;
};

export type FullImageType = {
  style: StyleProp<ViewStyle>;
  source: ImageSourcePropType;
  ImageStyle?: StyleProp<ImageStyle>;
  radius?: number;
  resizeMode?: ImageResizeMode;
};

export type AuthBodyType = {
  heading: string;
  sub: string;
  title?: string | object;
  children: ReactNode;
  onPress?: () => void;
  noButton?: boolean;
  load?: boolean;
};

export type loaderType = {
  msg?: string;
  visible: boolean;
  isError?: boolean;
  onClose?: () => void;
};

export type forgetType = {
  msg?: string;
  visible: boolean;
  onClose?: () => void;
  onEmail?: () => void;
  onPhone?: () => void;
};

export type RadioType = {
  i: number;
  focus: boolean;
  data: {label: string; isSub?: boolean};
  onPress?: (e: GestureResponderEvent) => void;
};

export type SettingCardType = {
  data: {
    title: string;
    onPress?: () => void;
    iconName: string;
    type: IconType;
  };
};

export type inboxCardType = {
  data: {
    time: string;
    title: string;
    lastMsg: string;
    image: string;
  };
  index: number;
  onPress: () => void;
};

export type inboxHiddentype = {
  onPress: () => void;
};

export type HeaderType = {
  gap?: boolean;
  label: string;
  noBack?: boolean;
  double?: boolean;
  isMenu?: boolean;
  isChat?: boolean;
  type?: IconType;
  IconName?: string;
  searchBar?: boolean;
  onSearch?: () => void;
  onChatPress?: () => void;
};

export type DividerType = {
  style?: StyleProp<ViewStyle>;
};

export type WPCardType = {
  data: any;
  onPress: () => void;
};

export type SearchBarType = {
  onChange: (text: string) => void;
  value: string;
  onClose: () => void;
};

export type WPButtonType = {
  fav?: boolean;
  small?: boolean;
  onFav?: () => void;
  onPress?: () => void;
};

export type WPSelectType = {
  visible: boolean;
  load: boolean;
  onHome: () => void;
  onLock: () => void;
  onBoth: () => void;
  onClose: () => void;
  onContact: () => void;
  onWhatsApp: () => void;
};

export type WPSelectCardType = {
  title: string;
  onPress?: () => void;
  iconName: string;
  type: IconType;
};

export type WPSwitch = {
  focus: number;
  onPress: (id: number) => void;
  data: object;
};

export type SPCardType = {
  onPress: () => void;
  data: {title: string; image: string};
};

export type toastProps = {
  title:string, message:string, type:string
};


export interface ErrorType {
  msg: string;
  visible: boolean;
}
export type LoadFunction = (loading: boolean) => void;
export type ErrorFunction = (error: ErrorType) => void;
export type ShakeFunction = () => void;
export type countFunction = (count: number) => void;
