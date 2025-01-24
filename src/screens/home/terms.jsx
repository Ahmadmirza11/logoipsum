import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Back from '../../component/back';

const Terms = () => {
  return (
    <View style={styles.container}>
      <Back title={'Terms and Conditions'} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Terms and Conditions</Text>

        <Text style={styles.sectionTitle}>Welcome</Text>
        <Text style={styles.text}>
          Welcome to [App Name]! By using our app, you agree to these Terms of Use. Please read them carefully before accessing or using our services.
        </Text>

        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.text}>By creating an account or using [App Name], you agree to:</Text>
        <Text style={styles.bullet}>{'\u2022'} Comply with these Terms of Use.</Text>
        <Text style={styles.bullet}>{'\u2022'} Follow all applicable laws and regulations.</Text>
        <Text style={styles.text}>If you do not agree to these terms, please do not use the app.</Text>

        <Text style={styles.sectionTitle}>2. Eligibility</Text>
        <Text style={styles.text}>
          You must be at least [minimum age, e.g., 13/16] to use [App Name]. By signing up, you confirm that you meet this requirement.
        </Text>

        <Text style={styles.sectionTitle}>3. Your Account</Text>
        <Text style={styles.text}>You are responsible for:</Text>
        <Text style={styles.bullet}>{'\u2022'} Maintaining the confidentiality of your account credentials.</Text>
        <Text style={styles.bullet}>{'\u2022'} Not sharing your account with others or impersonating someone else.</Text>
        <Text style={styles.text}>
          Notify us immediately of any unauthorized use of your account.
        </Text>

        <Text style={styles.sectionTitle}>4. Acceptable Use</Text>
        <Text style={styles.text}>When using [App Name], you agree to:</Text>
        <Text style={styles.bullet}>{''} Share lawful and respectful content.</Text>
        <Text style={styles.bullet}>{'\u2022'} Not use the app for harassment, spamming, or illegal activities.</Text>
        <Text style={styles.bullet}>{'\u2022'} Avoid uploading harmful content (e.g., viruses, malware).</Text>
        <Text style={styles.text}>
          We reserve the right to remove content or restrict access for violations of these terms.
        </Text>

        <Text style={styles.sectionTitle}>5. Content Ownership</Text>
        <Text style={styles.text}>Your Content:</Text>
        <Text style={styles.bullet}>
          {'\u2022'} You retain ownership of the content you post but grant us a license to use it for operating and improving the app.
        </Text>
        <Text style={styles.text}>Our Content:</Text>
        <Text style={styles.bullet}>
          {'\u2022'} You may not copy, modify, or distribute any part of the app without our permission.
        </Text>

        <Text style={styles.sectionTitle}>6. Privacy</Text>
        <Text style={styles.text}>
          Your use of the app is also governed by our [Privacy Policy]. Please review it to understand how we handle your data.
        </Text>

        <Text style={styles.sectionTitle}>7. Modifications and Updates</Text>
        <Text style={styles.text}>
          We may update these Terms or the app features at any time. Significant changes will be communicated through the app or email. Your continued use constitutes acceptance of the updated Terms.
        </Text>

        <Text style={styles.sectionTitle}>8. Termination</Text>
        <Text style={styles.text}>We reserve the right to suspend or terminate your account if you:</Text>
        <Text style={styles.bullet}>{'\u2022'} Violate these Terms of Use.</Text>
        <Text style={styles.bullet}>{'\u2022'} Engage in activities harmful to the app or other users.</Text>

        <Text style={styles.sectionTitle}>9. Limitation of Liability</Text>
        <Text style={styles.text}>
          [App Name] is provided "as is" without warranties of any kind. We are not responsible for any damages resulting from your use of the app.
        </Text>

        <Text style={styles.sectionTitle}>10. Governing Law</Text>
        <Text style={styles.text}>
          These Terms are governed by the laws of [jurisdiction, e.g., your country/state]. Any disputes will be resolved in the courts of [jurisdiction].
        </Text>

        <Text style={styles.sectionTitle}>11. Contact Us</Text>
        <Text style={styles.text}>
          If you have questions about these Terms, please contact us at:
        </Text>
        <Text style={styles.contact}>info@company.com</Text>
      </ScrollView>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding:6
  },
  contentContainer: {
    paddingHorizontal: 20,
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
