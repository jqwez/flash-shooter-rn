import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';

export default function App() {
  const [running, setRunning] = useState(false);
  useEffect(()=> {
    setRunning(true), []
  })

  return (
    <View style={{flex:1, backgroundColor: 'darkgrey'}}>
      <GameEngine
        systems={[Physics]}
        entities={entities(null)}
        running={true}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 20
        }}>
    

      </GameEngine>
      
      <StatusBar style="auto" hidden={true}/>
      
    </View>
  );
}

