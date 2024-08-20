import { Stack } from "expo-router"
import "./global.css"
import Toast from "react-native-toast-message"

const StackLayout = () => {
   return (
      <>
         <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         </Stack>
         <Toast />
      </>
   )
}

export default StackLayout