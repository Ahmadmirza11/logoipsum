import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Homesearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [history, setHistory] = useState([]);
  const navigation=useNavigation()

  const allSuggestions = [
    {
      name: 'ALI PUR CHATHA',
      detail: 'A small town in Punjab',
      icon: 'location-outline',
    },
    {
      name: 'GUJRANWALA',
      detail: 'Known for its wrestlers',
      icon: 'location-outline',
    },
    {
      name: 'SIALKOT',
      detail: 'Famous for sports goods manufacturing',
      icon: 'location-outline',
    },
    {
      name: 'LAHORE',
      detail: 'The cultural capital of Pakistan',
      icon: 'location-outline',
    },
    {
      name: 'PINDI',
      detail: 'Common name for Rawalpindi',
      icon: 'location-outline',
    },
    {name: 'MULTAN', detail: 'City of Saints', icon: 'location-outline'},
    {
      name: 'PASHAWAR',
      detail: 'A district in Punjab',
      icon: 'location-outline',
    },
    {name: 'multan', detail: 'A district in Punjab', icon: 'location-outline'},
    {name: 'RAWAL', detail: 'A district in Punjab', icon: 'location-outline'},
    {name: 'NAYAK', detail: 'A district in Punjab', icon: 'location-outline'},
  ];

  const handleSearch = text => {
    setQuery(text);
    if (text) {
      const filteredSuggestions = allSuggestions.filter(
        item =>
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.detail.toLowerCase().includes(text.toLowerCase()),
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = item => {
    setQuery(item.name);
    setSuggestions([]);

    // Add to history if not already present
    if (!history.some(historyItem => historyItem.name === item.name)) {
      setHistory([...history, {name: item.name, detail: item.detail}]);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleSelect(item)}>
      <View style={styles.suggestionItem}>
        <Icon
          name={item.icon}
          size={20}
          color="#333"
          style={styles.locationIcon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.suggestionText}>{item.name}</Text>
          <Text style={styles.suggestionDetail}>{item.detail}</Text>
        </View>
        <Icons
          name="arrow-up-right"
          size={20}
          color="#888"
          style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  );

  const renderHistoryItem = ({item}) => (
    <TouchableOpacity onPress={() => handleSelect(item)}>
      <View style={styles.historyItem}>
        <Icons
          name="clock"
          size={16}
          color="grey"
          style={styles.historyIcon}
        />
        <TouchableOpacity onPress={()=>navigation.navigate("musium")}>
        <View style={styles.textContainer}>
          <Text style={styles.historyText}>{item.name}</Text>
          <Text style={styles.historyDetail}>{item.detail}</Text>
        </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search here"
        placeholderTextColor={'black'}
        value={query}
        onChangeText={handleSearch}
      />
      {history.length > 0 && (
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Recent Searches</Text>
          <FlatList
            data={history}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={renderHistoryItem}
          />
        </View>
      )}
      {suggestions.length > 1 && (
        <FlatList
          data={suggestions}
          keyExtractor={item => item.name}
          renderItem={renderItem}
          style={styles.suggestionsContainer}
        />
      )}
    </View>
  );
};

export default Homesearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
    top: 50,
  },
  searchInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  suggestionsContainer: {
    marginTop: 20,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'space-between',
  },
  locationIcon: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  suggestionText: {
    fontSize: 16,
  },
  suggestionDetail: {
    fontSize: 12,
    color: '#666',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  historyContainer: {
    marginTop: 20,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  historyText: {
    fontSize: 16,
    
  },
  historyDetail: {
    fontSize: 12,
    color: '#666',
  },
  historyIcon: {
    marginRight: 20, // Ensure proper spacing between icon and text
  },
});
