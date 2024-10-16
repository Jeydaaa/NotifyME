import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import styles from '../styles/loginstyles';
import { supabase } from '../../supabase';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles') // Change this if your user table is named differently
        .select('*')
        .or(`email.eq.${email}, username.eq.${email}`)
        .single();

      if (error) {
        console.error('Login error:', error);
        alert('Invalid credentials');
        return;
      }

      // If successful, navigate to the home screen (Reminders tab)
      router.push('/screen/home'); // Adjust the route to match your home screen path
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../screen/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login Now</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../screen/images/envelope.png')} style={styles.icon} />
        <TextInput
          placeholder="Email/Username"
          placeholderTextColor="#C0C0C0"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../screen/images/lock.png')} style={styles.icon} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#C0C0C0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <Link href="/screen/register">
        <Text style={styles.createAccount}>
          Don’t have an account? <Text style={styles.createLink}>Create here</Text>
        </Text>
      </Link>
    </View>
  );
};

export default LoginScreen;
