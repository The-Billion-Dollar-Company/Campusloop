import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function App() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Small delay to ensure navigation is mounted
      const timer = setTimeout(() => {
        router.replace("/splash");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [router, isMounted]);

  return <View />; // Render a simple view instead of null
}