import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AdminScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Painel de Administração</Text>
      <Button title="Sair" onPress={() => navigation.replace('Login')} />
    </View>
  );
}
