import { useColorScheme } from 'nativewind'
import { View, Pressable, Platform } from 'react-native'
import {
   HeartIcon,
   HomeIcon,
   MoonIcon,
   ShoppingCartIcon,
   SunIcon
} from 'react-native-heroicons/outline'

export default function Navbar() {

   const { colorScheme, toggleColorScheme } = useColorScheme()

   return (
      <View
         style={{
            ...Platform.select({
               ios: {
                  shadowColor: 'black',
                  shadowOpacity: 0.1,
                  shadowOpacity: 0.3,
                  shadowRadius: 20
               },
               android: {
                  elevation: 5,
               }
            })
         }}
         className='px-8 py-6 bg-white dark:bg-soft-dark flex-row items-center justify-between'
      >
         <HomeIcon color={colorScheme === 'light' ? 'black' : 'white'} size={30} />
         <HeartIcon color={colorScheme === 'light' ? 'black' : 'white'} size={30} />
         <ShoppingCartIcon color={colorScheme === 'light' ? 'black' : 'white'} size={30} />
         <Pressable onPress={toggleColorScheme}>
            {colorScheme === 'light' && (
               <SunIcon
                  color={colorScheme === 'light' ? 'black' : 'white'}
                  size={28}
               />
            )}
            {colorScheme === 'dark' && (
               <MoonIcon
                  color={colorScheme === 'light' ? 'black' : 'white'}
                  size={28}
               />
            )}
         </Pressable>
      </View>
   )
}