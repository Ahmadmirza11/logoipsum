import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Back from '../../component/back';

const Policy = () => {
  return (
    <View style={styles.container}>
      <Back title={'Privacy Policy'} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
       

        <Text style={styles.sectionTitle}>Welcome</Text>
        <Text style={styles.text}>
          Welcome to [App Name]! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our app.
        </Text>

        <Text style={styles.sectionTitle}>1. Information We Collect</Text>
        <Text style={styles.text}>We collect the following types of information:</Text>
        <Text style={styles.bullet}>{'\u2022'} Personal Information: Name, email address,   phone number, profile picture, and other account details you provide.</Text>
        <Text style={styles.bullet}>{'\u2022'} Activity Data: Posts, comments, likes, and interactions within the app.</Text>
        <Text style={styles.bullet}>{'\u2022'} Device Information: IP address, device type, operating system, and app usage data.</Text>
        <Text style={styles.bullet}>{'\u2022'} Location Data (Optional): If you enable location services, we may collect your location to enhance features like check-ins.</Text>

        <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
        <Text style={styles.text}>We use your data to:</Text>
        <Text style={styles.bullet}>{'\u2022'} Provide and improve app functionality.</Text>
        <Text style={styles.bullet}>{'\u2022'} Personalize your experience (e.g., showing content based on your preferences).</Text>
        <Text style={styles.bullet}>{'\u2022'} Communicate with you about updates, offers, or support.</Text>
        <Text style={styles.bullet}>{'\u2022'} Ensure app security and prevent unauthorized activity.</Text>

        <Text style={styles.sectionTitle}>3. Sharing Your Information</Text>
        <Text style={styles.text}>We do not sell your personal information. However, we may share your data with:</Text>
        <Text style={styles.bullet}>{'\u2022'} Service Providers: Third-party companies that help us deliver app services (e.g., hosting, analytics).</Text>
        <Text style={styles.bullet}>{'\u2022'} Legal Authorities: When required by law or to protect our users and platform.</Text>

        <Text style={styles.sectionTitle}>4. Your Privacy Choices</Text>
        <Text style={styles.text}>You can control your privacy by:</Text>
        <Text style={styles.bullet}>{'\u2022'} Adjusting your account privacy settings (Public, Private, Hidden).</Text>
        <Text style={styles.bullet}>{'\u2022'} Managing permissions for location and notifications in your device settings.</Text>
        <Text style={styles.bullet}>{'\u2022'} Requesting access, correction, or deletion of your personal information.</Text>

        <Text style={styles.sectionTitle}>5. Data Security</Text>
        <Text style={styles.text}>
          We use encryption, secure servers, and other measures to protect your data. While we strive for security, no system is completely foolproof.
        </Text>

        <Text style={styles.sectionTitle}>6. Data Retention</Text>
        <Text style={styles.text}>
          We retain your information as long as your account is active or as needed to provide our services. You can delete your account anytime to remove your data.
        </Text>

        <Text style={styles.sectionTitle}>7. Children's Privacy</Text>
        <Text style={styles.text}>
          Our app is not intended for users under [age, e.g., 13/16], and we do not knowingly collect data from them.
        </Text>

        <Text style={styles.sectionTitle}>8. Changes to This Policy</Text>
        <Text style={styles.text}>
          We may update this Privacy Policy. Significant changes will be communicated through the app or email.
        </Text>

        <Text style={styles.sectionTitle}>9. Contact Us</Text>
        <Text style={styles.text}>
          If you have questions or concerns about this policy, please contact us at:
        </Text>
        <Text style={styles.contact}>info@company.com</Text>
      </ScrollView>
    </View>
  );
};

export default Policy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#f7f7f7',
  },
  contentContainer: {
    // paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#444',
  },
  text: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 10,
  },
  bullet: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
  contact: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
