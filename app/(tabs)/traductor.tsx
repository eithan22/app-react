import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Traductor() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const traducirNumero = () => {
    const num = parseInt(numero);

    // Validamos que sea un número del 1 al 1000
    if (isNaN(num) || num < 1 || num > 1000) {
      setResultado('Por favor, ingresa un número del 1 al 1000');
      return;
    }

    if (num === 1000) {
      setResultado('mil');
      return;
    }

    // Diccionarios de palabras
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    let letras = '';

    // Calculamos las Centenas
    if (num >= 100) {
      if (num === 100) {
        letras += 'cien ';
      } else {
        letras += centenas[Math.floor(num / 100)] + ' ';
      }
    }

    // Calculamos las Decenas y Unidades
    const resto = num % 100;
    if (resto >= 10 && resto <= 19) {
      letras += especiales[resto - 10];
    } else {
      if (resto >= 20) {
        if (resto === 20) {
          letras += 'veinte';
        } else if (resto < 30) {
          letras += 'veinti' + unidades[resto % 10];
        } else {
          letras += decenas[Math.floor(resto / 10)];
          if (resto % 10 > 0) letras += ' y ' + unidades[resto % 10];
        }
      } else if (resto > 0) {
        letras += unidades[resto];
      }
    }

    setResultado(letras.trim());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Traductor a Letras</Text>
      
      <Text style={styles.instruccion}>Ingresa un número del 1 al 1000:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: 250"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />

      <TouchableOpacity style={styles.boton} onPress={traducirNumero}>
        <Text style={styles.textoBoton}>Traducir</Text>
      </TouchableOpacity>

      {resultado !== '' && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  instruccion: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
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
    backgroundColor: '#6f42c1', // Un color morado diferente para variar
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  resultado: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d63384',
    textAlign: 'center',
    textTransform: 'capitalize',
  }
});