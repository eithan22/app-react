import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Sumadora() {
  // Aquí guardamos temporalmente lo que el usuario escribe
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  // Esta es la función matemática que hace el trabajo
  const calcularSuma = () => {
    // Convertimos el texto ingresado a números reales
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    // Verificamos que realmente hayan escrito números y no letras
    if (!isNaN(n1) && !isNaN(n2)) {
      setResultado(n1 + n2);
    } else {
      setResultado("Error: Ingresa números válidos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sumadora Interactiva</Text>

      {/* Primer cajón de texto */}
      <TextInput
        style={styles.input}
        placeholder="Ingresa el primer número"
        keyboardType="numeric" // Esto hace que en el celular se abra el teclado de números
        value={numero1}
        onChangeText={setNumero1}
      />

      {/* Segundo cajón de texto */}
      <TextInput
        style={styles.input}
        placeholder="Ingresa el segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />

      {/* El botón para ejecutar la suma */}
      <TouchableOpacity style={styles.boton} onPress={calcularSuma}>
        <Text style={styles.textoBoton}>Sumar</Text>
      </TouchableOpacity>

      {/* Solo mostramos el resultado si ya se hizo una suma */}
      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

// Los estilos para que se vea como una app profesional
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "white",
    fontSize: 16,
  },
  boton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  resultado: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: "bold",
    color: "#28A745",
  },
});
