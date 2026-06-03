import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Keyboard } from 'react-native';

export default function TablaMultiplicar() {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState([]); // Aquí guardaremos la lista de resultados

  const generarTabla = () => {
    // Esto es un detalle profesional: oculta el teclado del celular al presionar el botón
    Keyboard.dismiss(); 

    const num = parseInt(numero);

    // Verificamos que se haya ingresado un número
    if (isNaN(num)) {
      setTabla(['Por favor, ingresa un número válido.']);
      return;
    }

    const nuevosResultados = [];
    // El ciclo for que multiplica desde el 1 hasta el 13
    for (let i = 1; i <= 13; i++) {
      nuevosResultados.push(`${num} x ${i} = ${num * i}`);
    }
    
    // Guardamos la lista completa para mostrarla en pantalla
    setTabla(nuevosResultados);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tabla de Multiplicar</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ingresa un número base"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />

      <TouchableOpacity style={styles.boton} onPress={generarTabla}>
        <Text style={styles.textoBoton}>Generar Tabla</Text>
      </TouchableOpacity>

      {/* Usamos ScrollView por si la lista es muy larga y el usuario necesita deslizar */}
      <ScrollView style={styles.listaContainer}>
        {tabla.map((item, index) => (
          <View key={index} style={styles.filaResultado}>
            <Text style={styles.textoResultado}>{item}</Text>
          </View>
        ))}
      </ScrollView>
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
  input: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#FF8C00', // Un color naranja para diferenciar esta pantalla
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  listaContainer: {
    width: '100%',
    flex: 1,
  },
  filaResultado: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  textoResultado: {
    fontSize: 20,
    fontWeight: '500',
    color: '#444',
  }
});