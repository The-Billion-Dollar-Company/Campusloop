import { useRouter } from "expo-router";
import "nativewind";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import "./global.css";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to Sign page after 3 seconds
    const timer = setTimeout(() => {
      if (router) {
        router.replace("/Sign");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center bg-campus-forest">
      {/* Logo/Brand */}
      <View className="items-center mb-8">
        <Text className="text-5xl font-bold text-white mb-4">
          CampusLoop
        </Text>
        <Text className="text-xl text-blue-100 text-center px-6">
          Connect with your campus community
        </Text>
      </View>

      {/* Loading Animation */}
      <View className="mt-12">
        <ActivityIndicator size="large" color="#ffffff" />
        <Text className="text-white mt-4 text-center">
          Loading...
        </Text>
      </View>
    </View>
  );
}
