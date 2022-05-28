import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0);

  const handleNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100);
    setNumero(novoNumero);
    console.log('apertou');
  };

  return (
    <SafeAreaView style={[style.container]}>
      <Text style={[style.numero]}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={[style.btn]}>
        <Text style={style.text}>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    borderWidth: 2,
  },
  text: {
    fontSize: 30,
    color: '#222',
    fontWeight: '600',
  },
  numero: {
    fontSize: 44,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  container: {
    backgroundColor: 'orange',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
