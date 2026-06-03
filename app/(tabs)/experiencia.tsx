import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi Experiencia</Text>
      
      <View style={styles.videoContainer}>
        {/* Cambia la URL de abajo por el enlace "embed" de tu video de YouTube */}
        <WebView 
          source={{ uri: 'https://www.youtube.com/embed/TU_ENLACE_AQUI' }} 
          style={styles.video}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  videoContainer: {
    width: '100%',
    height: 300, // Altura del video
    borderRadius: 10,
    overflow: 'hidden',
  },
  video: {
    flex: 1,
  }
});