import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Header, ImageBackground} from '../../../Components';
import * as Anime from 'react-native-animatable';
import io from 'socket.io-client';
import {iOS} from '../../../Utils/Constants';
import {
  MessageText,
  MessageImage,
  Time,
  utils,
  useChatContext,
  GiftedChat,
  InputToolbar,
  RenderMessageAudioProps,
  Composer,
  Send,
} from 'react-native-gifted-chat';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Colors} from '../../../Utils/Colors';
// Initialize Socket.IO
const socket = io('http://your-server-ip:3000'); // Change to your backend IP
const {isSameUser, isSameDay} = utils;

const ChatScreen = ({navigation, route}) => {
  const {item} = route.params;
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState(''); // Track input text

  useEffect(() => {
    // Load initial message
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);

    // Listen for incoming messages
    socket.on('receiveMessage', message => {
      setMessages(prevMessages => GiftedChat.append(prevMessages, [message]));
    });

    return () => {
      socket.off('receiveMessage'); // Clean up listener
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    if (messages.length > 0) {
      setText('');
      const message = messages[0];
      setMessages(prevMessages => GiftedChat.append(prevMessages, [message]));
      socket.emit('sendMessage', message); // Send message to server
    }
  }, []);

  return (
    <>
      <ImageBackground>
        <Anime.View animation="fadeIn" duration={1300}>
          <Header label={item.title} gap />
        </Anime.View>

        <KeyboardAvoidingView
          behavior={iOS ? 'padding' : 'height'}
          style={{flex: 1}}>
          <GiftedChat
            // messagesContainerStyle={{backgroundColor:'red'}}
            text={text} // ✅ Ensure `text` is controlled
            onInputTextChanged={setText} // ✅ Keep `text` updated
            renderAvatarOnTop
            isCustomViewBottom
            renderAvatar={() => (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../Assets/Images/noImage.png')}
              />
            )}
            placeholder="hellow world"
            renderSend={props => {
              text.trim().length === 0 ? (
                <TouchableOpacity onPress={() => console.log('Open Camera')}>
                  <Icon
                    type={IconType.Ionicons}
                    name="camera-outline"
                    size={24}
                    color="gray"
                    style={{marginRight: 10}}
                  />
                </TouchableOpacity>
              ) : (
                <Send
                  {...props}
                  containerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <Icon
                    type={IconType.MaterialCommunityIcons}
                    name="send-circle"
                    size={24}
                    color={Colors.white}
                  />
                </Send>
              ); // Hide Send when input is empty
            }} // Send Button
            renderComposer={props => (
              <Composer
                {...props}
                textInputStyle={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  flex: 1,
                }}
                text={text}
                onTextChanged={newText => setText(newText)} // Update state
              />
            )}
            renderInputToolbar={props => (
              <InputToolbar
                {...props}
                containerStyle={{
                  backgroundColor: '#00103B',
                }}
                renderActions={() => {
                  if (text.length > 0) return null; // Hide when user types
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() => console.log('Open Camera')}>
                        <Icon
                          type={IconType.Ionicons}
                          name="camera-outline"
                          size={24}
                          color="gray"
                          style={{marginRight: 10}}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => console.log('Open Mic')}>
                        <Icon
                          type={IconType.Ionicons}
                          name="mic-outline"
                          size={24}
                          color="gray"
                        />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
              /* <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                  <Composer
                    {...props}
                    textInputStyle={{
                      backgroundColor: 'white',
                      borderRadius: 20,
                      paddingHorizontal: 10,
                      flex: 1,
                    }}
                  />
                  {text.length === 0 && ( // Show buttons only if text is empty
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                      <TouchableOpacity onPress={() => console.log("Open Camera")}>
                        <Icon type={IconType.Ionicons} name="camera-outline" size={24} color="gray" style={{ marginRight: 10 }} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => console.log("Open Mic")}>
                        <Icon type={IconType.Ionicons} name="mic-outline" size={24} color="gray" />
                      </TouchableOpacity>
                    </View>
                  )}
                </View> */
            )}
            scrollToBottomStyle={{backgroundColor: 'pink'}}
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{_id: 1}}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
      <SafeAreaView style={{backgroundColor: '#00103B'}} />
    </>
  );
};

export default ChatScreen;
