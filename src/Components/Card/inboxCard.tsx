import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {inboxCardType} from '../../Utils/type';
import {FullImage, Heading, Sub} from '..';
import responsive, {SPACING} from '../../Utils/responsive';
import {style} from './style';
import {GlobalStyle, Row, Space_Between} from '../../Utils/GlobalStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Colors, darkTheme, lightTheme} from '../../Utils/Colors';

const InboxCard: FC<inboxCardType> = ({data, onPress, index}) => {
  const {time, title, lastMsg, image} = data;
  const isDark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        GlobalStyle.row,
        GlobalStyle.Shadow,
        style.inboxCardCont,
        {
          backgroundColor: isDark ? Colors.ash : darkTheme.grey,
        },
      ]}>
      <Space_Between style={GlobalStyle.full}>
        <Row style={{maxWidth: '70%'}}>
          <FullImage source={{uri: image}} style={style.inboxDP} />
          <View style={{marginLeft: SPACING.SMALL}}>
            <Heading numberOfLines={1} style={style.inboxTitle} text={title} />
            <Sub numberOfLines={1} style={style.inboxLastMsg} text={lastMsg} />
          </View>
        </Row>
        <Sub
          style={[
            style.inboxTime,
            {color: isDark ? darkTheme.grey : lightTheme.grey},
          ]}
          text={time}
        />
      </Space_Between>
    </TouchableOpacity>
  );
};

export default InboxCard;
