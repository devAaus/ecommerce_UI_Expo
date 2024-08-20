import { View, Text, Pressable } from 'react-native'
import {
   HeartIcon,
   HomeIcon,
   MoonIcon,
   ShoppingCartIcon
} from 'react-native-heroicons/outline'

export default function Navbar() {
   return (
      <View className='px-8 py-6 bg-white shadow-2xl border-t border-gray-300 flex-row items-center justify-between'>
         <HomeIcon color='black' size={30} />
         <HeartIcon color='black' size={30} />
         <ShoppingCartIcon color='black' size={30} />
         <Pressable>
            <MoonIcon color='black' size={30} />
         </Pressable>
      </View>
   )
}