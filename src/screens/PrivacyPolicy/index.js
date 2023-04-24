import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          This page is meant to inform you of our policies regarding the
          collection, use, and disclosure of personal data when you use our
          Service and the choices you have associated with that data. We comply
          with the General Data Protection Regulation (GDPR) and the Data
          Protection Act 2018 (DPA 2018) in the United Kingdom.{' '}
        </Text>
        <Text style={styles.paragraph}>
          We use your data to provide and improve the Service. By using the
          Service, you agree to the collection and use of information in
          accordance with this policy.{' '}
        </Text>
        <Text style={styles.subHeading}>What information do we collect?</Text>
        <Text style={styles.paragraph}>
          We may collect the following information:
          <View>
            <Text style={styles.bulletPoint}>
              • User login details - username and password.
            </Text>
            <Text style={styles.bulletPoint}>
              • Contact details - email address.
            </Text>
            <Text style={styles.bulletPoint}>• User-submitted comments.</Text>
          </View>
        </Text>
        <Text style={styles.subHeading}>Protecting Your Data</Text>
        <Text style={styles.paragraph}>
          We ensure that all sensitive and personally identifiable information
          is stored securely:{' '}
        </Text>
        <View>
          <Text style={styles.bulletPoint}>
            • All personal data stored in the database is encrypted using modern
            encryption methods and standards.
          </Text>
          <Text style={styles.bulletPoint}>
            • This application makes uses Transport Layer Security (TLS) to
            encrypt data in transit between services and users. Allowing for a
            secure communication channel that protects the privacy and integrity
            of your data while in transit.
          </Text>
          <Text style={styles.bulletPoint}>
            • The necessary authentication and authorisation safeguards have
            been implemented to guarantee the security of your information.
          </Text>
        </View>
        <Text style={styles.subHeading}>Data Usage</Text>
        <Text style={styles.paragraph}>
          We use your data for the following purposes:
        </Text>
        <View>
          <Text style={styles.bulletPoint}>
            • To provide and maintain our Service.
          </Text>
          <Text style={styles.bulletPoint}>
            • To notify you about changes to our Service.
          </Text>
          <Text style={styles.bulletPoint}>
            • To allow you to participate in interactive features of our
            Service.
          </Text>
          <Text style={styles.bulletPoint}>• To provide customer support.</Text>
          <Text style={styles.bulletPoint}>
            • To gather analysis or valuable information so that we can improve
            our Service.
          </Text>
          <Text style={styles.bulletPoint}>
            • To monitor the usage of our Service.
          </Text>
          <Text style={styles.bulletPoint}>
            • To detect, prevent and address technical issues.
          </Text>
        </View>
        <Text style={styles.paragraph}>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties.
        </Text>
        <Text style={styles.subHeading}>External Links</Text>
        <Text style={styles.paragraph}>
          The CrimeMap application may contain links to other websites of
          interest, for example – the Neighbourhood Watch website. Be aware that
          by clicking on these links you are leaving the CrimeMap application,
          and our privacy policy will not apply. We therefore cannot guarantee
          the protection of any personal information you disclose to these
          sites.{' '}
        </Text>
        <Text style={styles.subHeading}>Contacting Us</Text>
        <Text style={styles.paragraph}>
          All enquiries should be directed to: andrew.daniel.landon@gmail.com
        </Text>
        <View>
          <Text style={styles.bulletPoint}>
            • Under the Data Protection Act 1998, you can request a copy of the
            personal data we store about you. To obtain this information, please
            contact us using the email address provided above.
          </Text>
          <Text style={styles.bulletPoint}>
            • If any of the information we are storing about you is outdated or
            incorrect, and you are unable to correct it via the CrimeMap app,
            please contact us using the email address provided above.
          </Text>
          <Text style={styles.bulletPoint}>
            • Please note that deleting your account will result in the removal
            of all personal data associated with it. If you would like to have
            specific data deleted without closing your account, please contact
            us using the email address provided above. However, please keep in
            mind that it may not always be feasible to delete certain data, such
            as contact details.
          </Text>
        </View>
        <Text></Text>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicy;
