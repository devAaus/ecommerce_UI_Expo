import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import CardList from './components/CardList';
import Navbar from './components/Navbar';
import { useColorScheme } from 'nativewind';

export default function App() {
  const { colorScheme } = useColorScheme();
  return (
    <View className='flex-1 bg-white dark:bg-dark pt-8'>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
      <SafeAreaView />
      <CardList />
      <Navbar />
    </View>
  );
}
