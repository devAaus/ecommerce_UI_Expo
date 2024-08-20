import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function Card({ id, image, name, price, column_width }) {
   const router = useRouter();

   const handlePress = () => {
      router.push(`/products/${id}`);
   };

   return (
      <View style={{ width: column_width }} className='justify-center p-3'>
         <Pressable onPress={handlePress} className='my-5'>
            <Image
               source={image}
               className='h-56 w-full mx-auto object-cover bg-slate-500 rounded-lg'
            />
         </Pressable>
         <Text className='text-dark mb-3'>
            {name.substring(0, 20) + '...'}
         </Text>
         <Text className='text-dark font-bold'>
            ${price}
         </Text>
      </View>
   );
}
