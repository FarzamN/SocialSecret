import styled from 'styled-components/native';
import { Colors, lightTheme } from './Colors';
import {StyleSheet, StatusBar} from 'react-native';
import responsive from './responsive';

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Space_Between = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Space_evenly = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const GlobalStyle = StyleSheet.create({
  container: {flex: 1},
  HideBar: {display: 'none'},
  ShowBar: {
    height: responsive.height(100),
    display: 'flex',
  },
  full: {
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Space_Between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Space_evenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  justify: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row_center: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  TextShadow: {
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  MapContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsive.space(6),
  },
  Padding: {
    marginHorizontal:responsive.space(10)
  },
  PaddingHor: {
    paddingHorizontal: responsive.space(15),
  },

  Vertical_Space: {
    height: responsive.height(15),
  },
  mt: {marginTop: responsive.space(15)},
  statusBar: {marginTop: StatusBar.currentHeight},
  ripple: {
    color: lightTheme.yellow,
  },
});
