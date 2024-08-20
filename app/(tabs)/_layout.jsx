import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';

const tabs = [
   {
      name: 'home',
      title: 'Home',
      icon: 'home',
   },
   {
      name: 'favourite',
      title: 'Favourite',
      icon: 'heart',
   },
   {
      name: 'cart',
      title: 'Your Cart',
      icon: 'shopping-cart',
   }
];


export default () => {

   return (
      <Tabs
         screenOptions={{
            headerTitleAlign: 'center',
            tabBarShowLabel: false,
         }}>
         {tabs.map((t) => (
            <Tabs.Screen
               key={t.name}
               name={t.name}
               options={{
                  headerTitle: t.title,
                  tabBarIcon: ({ color, size }) => (
                     <Feather name={t.icon} color={color} size={size} />
                  )
               }}
            />
         ))}
      </Tabs>

   );
}