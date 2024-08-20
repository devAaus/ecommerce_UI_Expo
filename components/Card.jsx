import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Card({ image, name, price, column_width }) {
   return (
      <View style={{ width: column_width }} className='justify-center p-3'>
         <Image
            source={image}
            className='m-5 h-56 w-full mx-auto object-cover bg-slate-500 rounded-lg'
         />
         <Text className='text-dark mb-3'>
            {name.substring(0, 20) + '...'}
         </Text>
         <Text className='text-dark font-bold'>
            ${price}
         </Text>
      </View>
   )
}