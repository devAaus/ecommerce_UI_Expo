import { Dimensions, FlatList } from 'react-native'
import React from 'react'
import { products } from '../utils/products'
import Card from './Card'

export default function CardList() {

   const numColumns = 2
   const screen_width = Dimensions.get('window').width
   const column_width = screen_width / numColumns
   return (
      <FlatList
         data={products}
         numColumns={numColumns}
         renderItem={({ item }) => (
            <Card
               {...item}
               column_width={column_width}
            />
         )}
         keyExtractor={(item) => item.id}
      />
   )
}