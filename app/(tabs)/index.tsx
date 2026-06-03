import { View, Text, Image, StyleSheet } from 'react-native';

export default function PaginaInicial() {
  return (
    <View style={styles.container}>
      {/* Asegúrate de haber puesto una foto tuya en la carpeta assets.
        Si aún no la tienes, puedes dejar esto así por ahora o cambiar 
        el nombre 'mi-foto.jpg' por el nombre real de tu imagen.
      */}
      <Image 
        source={require('@/assets/images/Yo.jpg')} 
        style={styles.foto} 
      />

      {/* Tus datos personales */}
      <Text style={styles.titulo}>Mi Perfil</Text>
      <Text style={styles.texto}>Nombre: [Eithan Leonardo]</Text>
      <Text style={styles.texto}>Apellido: [Read]</Text>
      <Text style={styles.texto}>Correo: [eithanread1@gmail.com]</Text>
      <Text style={styles.texto}>Matrícula: [2024-1869]</Text>
    </View>
  );
}

// Aquí le damos diseño para que se vea ordenado y bonito
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  foto: {
    width: 150, 
    height: 150, // Esto simula el tamaño cuadrado 2x2
    borderRadius: 10, 
    marginBottom: 20,
    backgroundColor: '#ccc', // Fondo gris por si la foto aún no carga
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
});