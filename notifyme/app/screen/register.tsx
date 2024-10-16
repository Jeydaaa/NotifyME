import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import styles from '../styles/registerstyles';
import { supabase } from '../../supabase';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter(); // Initialize the router

  const handleRegister = async () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Register the user using Supabase
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    // Insert additional user data into 'profiles' table
    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          { id: data.user.id, username: username },
        ]);

      if (profileError) {
        alert('Error saving profile data: ' + profileError.message);
      } else {
        alert('Registration successful!');
        // Navigate to the login screen after successful registration
        router.push('/screen/login'); // Use the correct path for your login screen
      }
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Image source={require('../screen/images/logo.png')} style={styles.logo} />

  
      <Text style={styles.title}>Let’s Get Started!</Text>


      <TextInput
        placeholder="Username"
        placeholderTextColor="#C0C0C0"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

  
      <TextInput
        placeholder="Email"
        placeholderTextColor="#C0C0C0"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#C0C0C0"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#C0C0C0"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
      />

      <TouchableOpacity style={styles.createButton} onPress={handleRegister}>
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Link href="/screen/login"> 
          <Text style={styles.loginLink}>Login here</Text>
        </Link>
      </Text>
    </View>
  );
};

export default RegisterScreen;
