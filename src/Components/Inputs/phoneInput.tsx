import React, {FC, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Input, {
  isValidPhoneNumber,
} from 'react-native-international-phone-number';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Colors, darkTheme, lightTheme} from '../../Utils/Colors';
import responsive from '../../Utils/responsive';

const PhoneInput: FC = props => {
  const {onChange, select} = props;
  const dark = useSelector((state: RootState) => state.themeMode.defTheme);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState('');

  return (
      <Input
        phoneInputStyles={{
          container: {
            height: 55,
            borderBottomWidth: 1,
            backgroundColor: 'rgba(255,255,255,0.3)',
            marginTop: responsive.space(15),

            borderWidth: 0,
            borderRadius: 0,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            //   borderColor: '#F3F3F3',
          },
          flagContainer: {
            // display: 'none',

            borderTopLeftRadius: 7,
            borderBottomLeftRadius: 7,
            backgroundColor: Colors.Non,
            justifyContent: 'center',
          },
            // flag: {display: 'none'},
            caret: {
              display: 'none',
              color: '#F3F3F3',
              fontSize: 16,
            },
            divider: {
              // display: 'none',

              backgroundColor: '#F3F3F3',
            },
          callingCode: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#F3F3F3',
          },
          input: {
            color: '#F3F3F3',
          },
        }}
        modalStyles={{
          modal: {
            borderWidth: 1,
            backgroundColor: dark
              ? darkTheme.background
              : lightTheme.background,
          },
          backdrop: {},
          divider: {
            backgroundColor: Colors.Non,
          },
          countriesList: {},
          searchInput: {
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#F3F3F3',
            color: '#F3F3F3',
            backgroundColor: '#333333',
            paddingHorizontal: 12,
            height: 46,
          },
          countryButton: {
            borderWidth: 1,
            borderColor: '#F3F3F3',
            backgroundColor: '#666666',
            marginVertical: 4,
            paddingVertical: 0,
          },
          noCountryText: {},
          noCountryContainer: {},
          flag: {
            color: '#FFFFFF',
            fontSize: 20,
          },
          callingCode: {
            color: '#F3F3F3',
          },
          countryName: {
            color: '#F3F3F3',
          },
          sectionTitle: {
            marginVertical: 10,
            color: '#F3F3F3',
          },
        }}
        dataDetectorTypes={'phoneNumber'}
        value={inputValue}
        onChangePhoneNumber={setInputValue}
        selectedCountry={selectedCountry}
        placeholder="Phone Number"
        onChangeSelectedCountry={setSelectedCountry}
      />
  );
};

export default PhoneInput;

/* <View style={{ marginTop: 10 }}>
<Text>
  Country: {`${selectedCountry?.name?.en} (${selectedCountry?.cca2})`}
</Text>
<Text>
  Phone Number: {`${selectedCountry?.callingCode} ${inputValue}`}
</Text>
<Text>
  isValid: {isValidPhoneNumber(inputValue, selectedCountry) ? 'true' : 'false'}
</Text>
</View> */
