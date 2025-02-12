import {KeyboardAvoidingView} from 'react-native';
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
    GiftedChat
  } from 'react-native-gifted-chat'
// Initialize Socket.IO
const socket = io('http://your-server-ip:3000'); // Change to your backend IP
const { isSameUser, isSameDay } = utils

const ChatScreen = ({navigation, route}) => {
  const {item} = route.params;
  const [messages, setMessages] = useState([]);

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
      const message = messages[0];
      setMessages(prevMessages => GiftedChat.append(prevMessages, [message]));
      socket.emit('sendMessage', message); // Send message to server
    }
  }, []);

  return (
    <ImageBackground>
      <Anime.View animation="fadeIn" duration={1300}>
        <Header label={item.title} gap />
      </Anime.View>

      <KeyboardAvoidingView
        behavior={iOS ? 'padding' : 'height'}
        style={{flex: 1}}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{_id: 1}}
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ChatScreen;
