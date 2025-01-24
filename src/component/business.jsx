import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import CommonButton from './button';

const PromotionPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 'trending-24',
      title: 'Trending 24 Hours',
      price: '$20',
      originalPrice: '$28',
      description: 'Short-term visibility boost',
    },
    {
      id: 'trending-7',
      title: 'Trending 7 Days',
      price: '$100',
      originalPrice: '$125',
      description: 'Short-term visibility boost',
      pkg: 'Premium',
    },
    {
      id: 'custom',
      title: 'Custom Package',
      price: '$150',
      originalPrice: '$225',
      description: 'Customizable options available',
      pkg: 'Business',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {packages.map(pkg => (
          <TouchableOpacity
            key={pkg.id}
            style={[
              styles.card,
              selectedPackage === pkg.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedPackage(pkg.id)}>
            {(pkg.id === 'trending-7' || pkg.id === 'custom') && (
              <View style={styles.topBar}>
                <Text style={styles.premiumText}>{pkg.pkg}</Text>
              </View>
            )}
            <View style={styles.row}>
              <Text style={styles.title}>{pkg.title}</Text>
              {/* Add Radio Button with Tick */}
              <View
                style={[
                  styles.radioButton,
                  selectedPackage === pkg.id && styles.selectedRadioButton,
                ]}>
                {selectedPackage === pkg.id && (
                  <Text style={styles.checkMark}>✓</Text>
                )}
              </View>
            </View>
            <Text style={styles.price}>
              {pkg.price}
              {' : '}
              {pkg.originalPrice && (
                <Text style={styles.originalPrice}>{pkg.originalPrice}</Text>
              )}
            </Text>
            <Text style={styles.description}>{pkg.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <CommonButton title={"Proceed"} containerStyle={styles.btn}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    marginBottom: 33,
  },
  card: {
    width: 300,
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    position: 'relative',
  },
  selectedCard: {
    borderColor: '#E5D8CF',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#E5D8CF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 10,
  },
  premiumText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 17,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
  },
  selectedRadioButton: {
    borderColor: '#66a01f',
    backgroundColor: '#66a01f',
  },
  checkMark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  btn: {
    width: "88%",
  }
});

export default PromotionPackages;
