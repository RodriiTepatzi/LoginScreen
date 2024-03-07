import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

const App = () => {

  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (expediente.length !== 6) {
      Alert.alert("El expediente debe tener 6 caracteres");
    } else if (password.length < 8) {
      Alert.alert("El password debe ser mayor o igual a 8 caracteres");
    } else {
      Alert.alert("Login exitoso");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput 
          style={styles.inputExpediente} 
          placeholder="Expediente" 
          value={expediente} 
          keyboardType='numeric'
          maxLength={6}
          onChangeText = {(text)=> {
            setExpediente(text)
          }}
          />
        <TextInput 
          style={styles.inputPassword} 
          placeholder="Password" 
          multiline={false}
          secureTextEntry={true} 
          onChangeText = {(text)=> {
            setPassword(text)
          }}
          />
      </View>
      <View style={styles.buttonContainer}>
      <Button
        color="white"
        style={styles.button}
        title="Login"
        onPress={handleSubmit}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
  },
  inputsContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  inputExpediente: {
    borderBottomWidth: 0,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  inputPassword: {
    borderBottomWidth: 0,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  buttonContainer: {
    marginHorizontal: 20,
    paddingVertical: 3,
    backgroundColor: '#040404',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  

});
export default App;