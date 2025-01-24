import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const emojis = [
  '😀',
  '😂',
  '😍',
  '🥺',
  '😎',
  '😊',
  '🤔',
  '😢',
  '🥳',
  '😜',
  '🤗',
  '🥺',
  '😆',
  '😏',
  '🙃',
  '😇',
  '😱',
  '😤',
  '😈',
  '🤩',
  '😜',
  '🧐',
  '😝',
  '🤐',
  '😛',
  '🤪',
  '😬',
  '😋',
  '😶',
  '🤭',
  '😜',
  '🧐',
  '😝',
  '🤐',
  '😛',
  '🤪',
  '😬',
  '😋',
  '😶',
  '🤭',
];

const Location = () => {
  const [search, setSearch] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState(emojis);

  // Handle search input change
  const handleSearch = text => {
    setSearch(text);
    if (text === '') {
      setFilteredEmojis(emojis);
    } else {
      setFilteredEmojis(emojis.filter(emoji => emoji.includes(text)));
    }
  };

  // Render each emoji item
  const renderItem = item => (
    <TouchableOpacity style={styles.emojiItem}>
      <Text style={styles.emojiText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Icon name={'arrow-back'} size={22} />

        <View style={styles.row}>
          <Text style={styles.txt}>Feeling</Text>
        </View>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for emojis..."
        placeholderTextColor={'#333'}
        value={search}
        onChangeText={handleSearch}
      />

      {/* ScrollView to make emojis scrollable */}
      <Text>Tagged</Text>
      <ScrollView contentContainerStyle={styles.emojiList}>
        {filteredEmojis.map((emoji, index) => (
          <View key={index} style={styles.emojiItem}>
            <Text style={styles.emojiText}>{emoji}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 11,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 16,
    marginBottom: 16,
    color: '#333',
  },
  emojiList: {
    // alignItems: 'center',
    paddingVertical: 10,
  },
  emojiItem: {
    padding: 10,
  },
  emojiText: {
    fontSize: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 16,
    paddingRight: 16,
  },
  row1: {
    marginTop: 20,
  },
});
