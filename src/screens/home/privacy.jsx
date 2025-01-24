import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import Back from '../../component/back';

const Privacy = () => {
  const [privacySetting, setPrivacySetting] = useState('Public');

  const handleToggle = value => {
    setPrivacySetting(value);
  };

  return (
    <View style={styles.container}>
      <Back title="Account Privacy" />

      <View style={styles.toggleContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.toggleLabel}>Public</Text>
          <Switch
            value={privacySetting === 'Public'}
            onValueChange={() => handleToggle('Public')}
          />
        </View>
        <Text style={styles.description}>
          When your account is public, your profile and posts can be seen by
          anyone, on or off this app, even if they don’t have an account.
        </Text>
      </View>

      <View style={styles.toggleContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.toggleLabel}>Private</Text>
          <Switch
            value={privacySetting === 'Private'}
            onValueChange={() => handleToggle('Private')}
          />
        </View>
        <Text style={styles.description}>
          Only your followers/Friends will be able to see your photos and
          videos.
        </Text>
      </View>

      <View style={styles.toggleContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.toggleLabel}>Hidden</Text>
          <Switch
            value={privacySetting === 'Hidden'}
            onValueChange={() => handleToggle('Hidden')}
          />
        </View>
        <Text style={styles.description}>
          Your profile and posts are completely private and won't appear in
          search results, recommendations, or to anyone without a direct
          invitation.
        </Text>
      </View>
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  privacy: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  toggleContainer: {
    marginBottom: 30,
  },
  toggleLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
});
