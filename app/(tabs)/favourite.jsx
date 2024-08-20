import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { products } from '../../utils/products'

const Favourite = () => {
   // Filter favorite products
   const favouriteItems = products.filter((product) => product.favourite);

   const renderItem = ({ item }) => (
      <View className="flex-row items-center bg-white p-4 mb-4 rounded-lg shadow-md">
         <Image
            source={item.image}
            className="w-24 h-24 object-cover rounded-lg mr-4"
         />
         <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
            <Text className="text-gray-700">${item.price}</Text>
            <Text className="text-gray-500">{item.description.slice(0, 50)}...</Text>
         </View>
      </View>
   );

   return (
      <View className="flex-1 p-4 bg-gray-100">
         {favouriteItems.length === 0 ? (
            <Text className="text-lg text-gray-600 text-center">No favorite items.</Text>
         ) : (
            <FlatList
               data={favouriteItems}
               renderItem={renderItem}
               keyExtractor={(item) => item.id}
               contentContainerStyle={styles.listContainer}
            />
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   listContainer: {
      paddingBottom: 40,
   },
});

export default Favourite;
