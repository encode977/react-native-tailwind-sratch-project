import { SafeAreaView, Text, View } from "react-native";
import { useColorScheme } from "nativewind";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className="bg-black rounded-lg p-4">
        <Text className="text-lg font-semibold text-white">
          React Native Sratch Project
        </Text>
      </View>
    </SafeAreaView>
  );
}
