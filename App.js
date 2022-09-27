import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

export default function App() {
    return(
      <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
      />
      <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            speak = () => {
              var thingsToSay = this.state.name;
              Speech.speak(thingsToSay)
            }
          }}
      >
        <Text style={styles.buttonText}>GO</Text>
      </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

