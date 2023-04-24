import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, Button, Alert} from 'react-native';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ProfileScreen = props => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(userData => {
        setUser(userData);
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
        },
      ],
    );
  };

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  async function deleteAccount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.deleteUser(user);
      console.log('Account deleted successfully');
    } catch (error) {
      console.log('Error deleting account:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Username</Text>
        <Text style={styles.data}>{user?.username}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.data}>{user?.attributes?.email}</Text>
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
    </View>
  );
};

export default ProfileScreen;
