import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{height: "100%"}}>
        <View className="w-full  justify-center min-h-[30vh] px-4">
        <View className="relative mt-5">
            <Text className="text-5xl font-bold text-center">
              BuckIt!
            </Text>
            <View className="justify-center pt-[30px] flex-row">
            <TouchableOpacity className="bg-rose-500 p-4">
              <Text> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity className="ml-[20px] bg-rose-500 p-4" >
              <Text> SignUp </Text>
            </TouchableOpacity>
            </View>
        </View>
        <Text>
        <Link href="/profile">Go to profile</Link>
        </Text>
        </View>

      </ScrollView>
      
    </SafeAreaView>
  );
}
