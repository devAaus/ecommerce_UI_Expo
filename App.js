import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import CardList from './components/CardList';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View className='flex-1 bg-white pt-8'>
      <StatusBar style="auto" />
      <SafeAreaView />
      <CardList />
      <Navbar />
    </View>
  );
}
