import { Ionicons } from '@expo/vector-icons';
import "nativewind";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-primary-50">
      <View className="px-6 py-8 bg-campus-forest rounded-b-2xl">
        {/* Header */}
        <View className="mb-8 mt-4">
          <Text className="text-3xl font-bold text-white mb-2 text-center">
             CampusLoop
          </Text>
          <Text className="text-primary-50 text-center">
            Stay connected with your campus community
          </Text>
        </View>

        {/* Search Bar */}
        <View className="mb-6 relative">
          <View className="flex-row items-center bg-white rounded-full px-4 py-3 border border-gray-200">
            <Ionicons name="search-outline" size={20} color="#9CA3AF" className="mr-2" />
            <TextInput
              placeholder="Search campus resources..."
              className="flex-1 text-body-md text-gray-800 ml-2"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>
      </View>

      {/* Content outside the green header */}
      <View className="px-6 py-6">
        {/* Categories Marquee */}
        <View className="mb-8">
          <Text className="text-title-lg text-campus-forest mb-4 ">
            Categories
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row "
            contentContainerStyle={{ paddingRight: 24 }}
          >
            <TouchableOpacity className="bg-white p-4 border-r-amber-950 rounded-campus mr-4 items-center min-w-[100] shadow-campus ">
              <Ionicons name="storefront-outline" size={28} color="#2D473E" />
              <Text className="text-label-md text-campus-forest mt-2 text-center">
                Marketplace
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white p-4 rounded-campus mr-4 items-center min-w-[100] shadow-campus">
              <Ionicons name="school-outline" size={28} color="#2D473E" />
              <Text className="text-label-md text-campus-forest mt-2 text-center">
                Academia
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white p-4 rounded-campus mr-4 items-center min-w-[100] shadow-campus">
              <Ionicons name="build-outline" size={28} color="#2D473E" />
              <Text className="text-label-md text-campus-forest mt-2 text-center">
                Skills
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white p-4 rounded-campus mr-4 items-center min-w-[100] shadow-campus">
              <Ionicons name="calendar-outline" size={28} color="#2D473E" />
              <Text className="text-label-md text-campus-forest mt-2 text-center">
                Events
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>




      </View>
    </ScrollView>
  );
}
