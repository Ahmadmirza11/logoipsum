import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Back from '../../component/back';

const Account = () => {
  return (
    <View style={styles.container}>
      <Back title={'About your Account'} />
      <Image
        style={{width: 70, height: 70, marginBottom: 15}}
        source={require('../../images/profile.png')}
      />
      <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
        Sheikh Abdul Rehman
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <View style={{marginTop: 11, width: 32, height: 22}}>
          <Image
            source={require('../../images/Shield.png')}
            style={{width: 22, height: 22}}
          />
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Date Joined</Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>11/2/2024</Text>
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
  },
});
