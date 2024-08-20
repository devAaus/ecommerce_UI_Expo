import { View, Text, Image, FlatList, } from 'react-native';
import { products } from '../../utils/products';

const Cart = () => {
   // Filter products that are in the cart
   const cartItems = products.filter((product) => product.cart.istrue);

   const renderItem = ({ item }) => (
      <View className="flex-row items-center bg-white p-4 mb-4 rounded-lg shadow-md">
         <Image
            source={item.image}
            className="w-24 h-24 object-cover rounded-lg mr-4"
         />
         <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
            <Text className="text-gray-700">${item.price}</Text>
            <Text className="text-gray-500">Quantity: {item.cart.quantity}</Text>
         </View>
         <Text className="text-lg font-bold text-gray-900">${(item.price * item.cart.quantity).toFixed(2)}</Text>
      </View>
   );

   // Calculate total amount
   const totalAmount = cartItems.reduce((total, item) => total + item.price * item.cart.quantity, 0);

   return (
      <View className="flex-1 p-4 bg-gray-100">
         {cartItems.length === 0 ? (
            <Text className="text-lg text-gray-600 text-center">Your cart is empty.</Text>
         ) : (
            <FlatList
               data={cartItems}
               renderItem={renderItem}
               keyExtractor={(item) => item.id}
            />
         )}
         <View className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <Text className="text-xl font-bold text-gray-900">Total: ${totalAmount.toFixed(2)}</Text>
         </View>
      </View>
   );
};

export default Cart;
