import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi Experiencia</Text>

      <View style={styles.videoContainer}>
        {/* Aquí está el WebView con los nuevos permisos agregados */}
        <WebView
          source={{ uri: "https://www.youtube.com/embed/zdBogV0tOgg" }}
          style={styles.video}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  videoContainer: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
  },
  video: {
    flex: 1,
  },
});
