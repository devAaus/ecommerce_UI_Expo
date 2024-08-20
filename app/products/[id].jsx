import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { products } from '../../utils/products';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';

const DetailsPage = () => {
   const { id } = useLocalSearchParams();
   const product = products.find((product) => product.id === id);

   const [isFavorite, setIsFavorite] = useState(product?.favourite || false);

   if (!product) {
      return (
         <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-xl font-bold text-gray-900">Product not found</Text>
         </View>
      );
   }

   return (
      <View className="flex-1 p-4">
         <Stack.Screen options={{ headerTitle: `${product.name}` }} />
         <ScrollView className="flex-1">
            <Image
               source={product.image}
               className="h-80 w-full rounded-lg mb-4"
            />
            <Text className="text-2xl font-bold text-gray-900 mb-2">
               {product.name}
            </Text>
            <Text className="text-lg font-semibold text-gray-700 mb-2">
               ${product.price}
            </Text>
            <Text className="text-base text-gray-600 mb-10">
               {product.description}
            </Text>
         </ScrollView>
         <Pressable
            className="bg-white py-4 rounded-lg flex-row justify-center items-center gap-3 shadow-2xl shadow-black mb-3"
            onPress={() => setIsFavorite(!isFavorite)}
         >
            {isFavorite
               ? <FontAwesome name="heart" size={20} color="black" />
               : <Feather name="heart" color="black" size={20} />
            }
            <Text className="font-bold text-lg text-black">Favorite</Text>
         </Pressable>
         <Pressable
            className="bg-red-500 py-4 rounded-lg flex-row justify-center items-center gap-3 shadow-2xl shadow-black"
            onPress={() => Toast.show({
               type: 'success',
               text1: 'Added to Cart'
            })}
         >
            <Feather name="shopping-cart" color="white" size={20} />
            <Text className="font-bold text-lg text-white">Add to Cart</Text>
         </Pressable>
      </View>
   );
};

export default DetailsPage;
