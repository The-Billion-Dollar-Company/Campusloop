import { Ionicons } from '@expo/vector-icons';
import "nativewind";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Event from '../Components/Event';
import Feature from '../Components/feature';
import "../global.css";

const Explore = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-6 py-8 bg-campus-forest">
        <View className="mt-4 mb-6">
          <Text className="text-headline-lg text-campus-pearl text-center mb-2">
            Explore Campus
          </Text>
          <Text className="text-body-md text-campus-mint text-center">
            Find rentals, events, and study materials
          </Text>
        </View>

        {/* Search Bar */}
        <View className="mb-4">
          <View className="flex-row items-center bg-white rounded-full px-4 py-3">
            <Ionicons name="search-outline" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search for anything..."
              className="flex-1 text-body-md text-gray-800 ml-3"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity className="ml-2">
              <Ionicons name="options-outline" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Filter Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row"
        >
          <TouchableOpacity className="bg-campus-mint px-4 py-2 rounded-full mr-3">
            <Text className="text-label-md text-campus-forest">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-full mr-3">
            <Text className="text-label-md text-campus-pearl">Rentals</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-full mr-3">
            <Text className="text-label-md text-campus-pearl">Events</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-full mr-3">
            <Text className="text-label-md text-campus-pearl">Notes</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-full">
            <Text className="text-label-md text-campus-pearl">Services</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Content */}
      <View className="px-6 py-6">

        <Feature/>

       <Event/>

        {/* Quick Actions */}
        <View>
          <Text className="text-title-lg text-campus-forest mb-4">
            Quick Actions
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="flex-1 bg-campus-sage p-4 rounded-campus mr-2 items-center">
              <Ionicons name="add-outline" size={24} color="#F6F2EE" />
              <Text className="text-label-md text-campus-pearl mt-2">Post Item</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-campus-mint p-4 rounded-campus ml-2 items-center">
              <Ionicons name="heart-outline" size={24} color="#2D473E" />
              <Text className="text-label-md text-campus-forest mt-2">Saved Items</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Explore;