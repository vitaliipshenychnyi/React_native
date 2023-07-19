import { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, View, Button } from 'react-native';

export const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      {/* <Image source={require('./photo_BG.png')} /> */}
      <View style={styles.wrapperFieldRegistration}>
        <Image source={require('./photo_user.png')} />
        <Text style={styles.text}>Реєстрація</Text>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="Логін"
            value={login}
            onChangeText={setLogin}
          />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button color="#FF6C00" style={styles.button} title="Зареєструватися" />
        <Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperInput: {
    gap: 16,
  },
  input: {
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderColor: '#E8E8E8',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    color: '#212121',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 32,
  },
  textLink: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
  button: {
    borderRadius: 5,
    paddingBottom: 16,
    paddingTop: 16,
    marginTop: 43,
  },
  wrapperFieldRegistration: {},
});
