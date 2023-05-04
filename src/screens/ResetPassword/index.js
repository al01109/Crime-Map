import React, {useState} from 'react';
import {View, Text, Pressable, TextInput, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import styles from './styles';

const ResetPasswordScreen = () => {
  const {
    params: {username, userEmail},
  } = useRoute();

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      await Auth.forgotPassword(username);
      console.log('Password reset code sent successfully');
    } catch (error) {
      console.log('Error sending reset code: ', error);
    }
  };

  const handleConfirmPassword = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      console.log('Password reset successfully');
    } catch (error) {
      console.log('Error resetting password: ', error);
    }
  };

  return (
    <View style={styles.userInfo}>
      <Text style={styles.email}>{userEmail}</Text>
      <Pressable
        style={styles.verificationButton}
        onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Send Verification Code</Text>
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Verification code"
        onChangeText={setCode}
        value={code}
      />
      <TextInput
        style={styles.input}
        placeholder="New password"
        secureTextEntry={true}
        onChangeText={setNewPassword}
        value={newPassword}
      />
      <Button
        title={'Confirm new password'}
        onPress={handleConfirmPassword}></Button>
    </View>
  );
};

export default ResetPasswordScreen;
