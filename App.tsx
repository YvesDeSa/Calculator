import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { Theme } from './src/styles/Theme';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme} >
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: "#000" }]}>
        <StatusBar
          style={theme === 'light' ? 'dark' : 'light'}
          backgroundColor='transparent'
          translucent
        />
        <Switch
          style={{ marginTop: 45 }}
          value={theme === 'light'}
          onValueChange={() => { setTheme(theme === 'light' ? 'dark' : 'light') }}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
