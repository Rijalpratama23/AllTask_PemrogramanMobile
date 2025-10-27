import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>User profile screen (UI only).</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F2E7', padding: 20 },
  title: { fontSize: 22, fontWeight: '700' },
  text: { marginTop: 8, color: '#666' },
});
