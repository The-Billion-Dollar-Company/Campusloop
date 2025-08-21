import { Ionicons } from '@expo/vector-icons';
import "nativewind";
import { Text, TouchableOpacity, View } from 'react-native';

const Event = () => {
  return (
    <View className="mb-8">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-title-lg text-campus-forest">
          Recent Listings
        </Text>
        <TouchableOpacity>
          <Text className="text-label-md text-campus-sage">See all</Text>
        </TouchableOpacity>
      </View>

      {/* Listing Cards */}
      <View className="space-y-4">
        {/* Rental Listing */}
        <TouchableOpacity className="bg-white p-4 rounded-campus shadow-campus border border-gray-100">
          <View className="flex-row items-start">
            <View className="w-16 h-16 bg-campus-mint rounded-lg items-center justify-center mr-3">
              <Ionicons name="bicycle-outline" size={24} color="#2D473E" />
            </View>
            <View className="flex-1">
              <View className="flex-row items-center mb-1">
                <Text className="text-title-md text-campus-forest mr-2">Mountain Bike</Text>
                <View className="bg-blue-100 px-2 py-1 rounded">
                  <Text className="text-label-md text-blue-600">Rental</Text>
                </View>
              </View>
              <Text className="text-body-md text-gray-600 mb-2">
                Perfect for campus commuting
              </Text>
              <View className="flex-row items-center justify-between">
                <Text className="text-title-md text-campus-forest">$15/day</Text>
                <View className="flex-row items-center">
                  <Ionicons name="location-outline" size={14} color="#788881" />
                  <Text className="text-label-md text-campus-slate ml-1">North Campus</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Event Listing */}
        <TouchableOpacity className="bg-white p-4 rounded-campus shadow-campus border border-gray-100">
          <View className="flex-row items-start">
            <View className="w-16 h-16 bg-purple-100 rounded-lg items-center justify-center mr-3">
              <Ionicons name="musical-notes-outline" size={24} color="#9333ea" />
            </View>
            <View className="flex-1">
              <View className="flex-row items-center mb-1">
                <Text className="text-title-md text-campus-forest mr-2">Jazz Night</Text>
                <View className="bg-purple-100 px-2 py-1 rounded">
                  <Text className="text-label-md text-purple-600">Event</Text>
                </View>
              </View>
              <Text className="text-body-md text-gray-600 mb-2">
                Live music at Student Center
              </Text>
              <View className="flex-row items-center justify-between">
                <Text className="text-title-md text-campus-forest">Free Entry</Text>
                <View className="flex-row items-center">
                  <Ionicons name="time-outline" size={14} color="#788881" />
                  <Text className="text-label-md text-campus-slate ml-1">Tonight 8PM</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Notes Listing */}
        <TouchableOpacity className="bg-white p-4 rounded-campus shadow-campus border border-gray-100">
          <View className="flex-row items-start">
            <View className="w-16 h-16 bg-green-100 rounded-lg items-center justify-center mr-3">
              <Ionicons name="book-outline" size={24} color="#16a34a" />
            </View>
            <View className="flex-1">
              <View className="flex-row items-center mb-1">
                <Text className="text-title-md text-campus-forest mr-2">CS 101 Notes</Text>
                <View className="bg-green-100 px-2 py-1 rounded">
                  <Text className="text-label-md text-green-600">Notes</Text>
                </View>
              </View>
              <Text className="text-body-md text-gray-600 mb-2">
                Complete semester notes with examples
              </Text>
              <View className="flex-row items-center justify-between">
                <Text className="text-title-md text-campus-forest">$10</Text>
                <View className="flex-row items-center">
                  <Ionicons name="star-outline" size={14} color="#fbbf24" />
                  <Text className="text-label-md text-campus-slate ml-1">4.8 (12 reviews)</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Event;