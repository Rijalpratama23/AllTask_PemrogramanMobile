import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';

const colors = {
  primary: '#00B8B0',
  secondary: '#FEFDFE',
  primer: '#939796',
};

const styles = StyleSheet.create({
  backGroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)', // ✅ efek bayangan hitam transparan
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60,
    padding: 20,
  },
  heading1: {
    fontWeight: '500',
    fontSize: 35,
    color: colors.secondary,
    marginBottom: 12,
  },
  heading2: {
    fontSize: 15,
    color: colors.secondary,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 10,
    width: 166,
    borderRadius: 20,
    marginBottom: 12,
  },
  btnText: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const App = () => {
  return (
    <ImageBackground
      source={require('./asset/Home.jpg')}
      style={styles.backGroundImage}
      resizeMode="cover"
      imageStyle={{ transform: [{ scale: 1.2 }] }}
    >
      <View style={styles.overlay} />

      {/* Konten teks & tombol */}
      <View style={styles.container}>
        <Text style={styles.heading1}>Your Next Adventure Starts Here</Text>
        <Text style={styles.heading2}>
          Life's too short to stay in one place. Find your next favorite
          city, beach, or mountain and let's get moving!
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default App;
