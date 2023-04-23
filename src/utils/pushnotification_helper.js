import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled = 
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorisation status: ', authStatus);
            getFCMToken();
        }
}

export async function getFCMToken() {
    let fcmToken = await AsyncStorage.getItem('fcmtoken');
    console.log(fcmToken, 'old token')
    if (!fcmToken) {
        try {
            let fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log(fcmToken, 'newToken');
                await AsyncStorage.setItem('fcmtoken', fcmToken);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const NotificationListener = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });

    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
        if (remoteMessage) {
            console.log(
                'Notification caused app to open from quit state:',
                remoteMessage.notification,
            );
        }
    })

    messaging().onMessage(async remoteMessage => {
        console.log('Notification on foreground state...', remoteMessage)
    })
}