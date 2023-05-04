import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, Button, Alert, ScrollView} from 'react-native';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneNumberVerified, setIsPhoneNumberVerified] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(userData => {
        setUser(userData);
        setIsEmailVerified(userData.attributes.email_verified);
        setIsPhoneNumberVerified(userData.attributes.phone_number_verified);
      })
      .catch(error => console.log(error));
  }, []);

  const showConfirmDialog = () => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to permenantly delete your account?',
      [
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            deleteAccount();
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: 'No',
          onPress: () => {},
        },
      ],
    );
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  const deleteAccount = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.deleteUser(user);
      console.log('Account deleted successfully');
    } catch (error) {
      console.log('Error deleting account:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Username</Text>
        <Text style={styles.data}>{user?.username}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.data}>{user?.attributes?.email}</Text>
        <Text style={styles.label}>Email Verified?</Text>
        <Text style={styles.data}>{isEmailVerified ? 'Yes' : 'No'}</Text>
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.data}>{user?.attributes?.phone_number}</Text>
        <Text style={styles.label}>Phone Number Verified?</Text>
        <Text style={styles.data}>{isPhoneNumberVerified ? 'Yes' : 'No'}</Text>
        <Button
          title="Forgot/Change Password"
          onPress={() =>
            navigation.navigate('Reset Password', {
              username: user?.username,
              userEmail: user?.attributes?.email,
            })
          }></Button>
        <Pressable onPress={() => navigation.navigate('Privacy Policy')}>
          <Text style={styles.privacyPolicy}>Privacy Policy</Text>
        </Pressable>
        <Pressable onPress={() => showConfirmDialog()}>
          <Text style={styles.deleteAccount}>
            Click Here To Delete Your Account
          </Text>
        </Pressable>
      </View>
      <View style={styles.signOut}>
        <Button onPress={signOut} title={'Sign Out'} />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
