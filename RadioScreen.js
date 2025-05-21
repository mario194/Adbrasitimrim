import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { Button } from 'react-native';

const RADIO_URL = 'https://streaming.radiosbr.net:8000/radio'; // coloque sua URL de rádio aqui

export default function RadioScreen() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function togglePlayback() {
    if (isPlaying && sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: RADIO_URL },
        { shouldPlay: true }
      );
      setSound(newSound);
      setIsPlaying(true);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎧 Rádio Gospel Brasil 24h</Text>
      <Button title={isPlaying ? 'Pausar' : 'Tocar'} onPress={togglePlayback} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
    
