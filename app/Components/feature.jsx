import { Ionicons } from '@expo/vector-icons';
import "nativewind";
import { Text, TouchableOpacity, View } from 'react-native';

const Feature = () => {
  return (
    <View className="mb-8">
      <Text className="text-title-lg text-campus-forest mb-4">
        Popular Categories
      </Text>
      <View className="flex-row flex-wrap justify-between">
        {/* Rentals */}
        <TouchableOpacity className="w-[48%] bg-blue-50 p-4 rounded-campus mb-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="home-outline" size={24} color="#2563eb" />
            <Text className="text-title-md text-blue-600 ml-2">Rentals</Text>
          </View>
          <Text className="text-body-md text-gray-600 mb-2">
            Find housing, bikes, textbooks
          </Text>
          <Text className="text-label-md text-blue-500">150+ items</Text>
        </TouchableOpacity>

        {/* Events */}
        <TouchableOpacity className="w-[48%] bg-purple-50 p-4 rounded-campus mb-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="calendar-outline" size={24} color="#9333ea" />
            <Text className="text-title-md text-purple-600 ml-2">Events</Text>
          </View>
          <Text className="text-body-md text-gray-600 mb-2">
            Campus events & activities
          </Text>
          <Text className="text-label-md text-purple-500">25 this week</Text>
        </TouchableOpacity>

        {/* Notes */}
        <TouchableOpacity className="w-[48%] bg-green-50 p-4 rounded-campus mb-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="document-text-outline" size={24} color="#16a34a" />
            <Text className="text-title-md text-green-600 ml-2">Notes</Text>
          </View>
          <Text className="text-body-md text-gray-600 mb-2">
            Study materials & notes
          </Text>
          <Text className="text-label-md text-green-500">500+ notes</Text>
        </TouchableOpacity>

        {/* Services */}
        <TouchableOpacity className="w-[48%] bg-orange-50 p-4 rounded-campus mb-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="people-outline" size={24} color="#ea580c" />
            <Text className="text-title-md text-orange-600 ml-2">Services</Text>
          </View>
          <Text className="text-body-md text-gray-600 mb-2">
            Tutoring, cleaning, etc.
          </Text>
          <Text className="text-label-md text-orange-500">80+ services</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Feature;