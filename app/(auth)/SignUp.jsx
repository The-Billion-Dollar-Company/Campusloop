import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-white px-6 py-8">
      {/* Header */}
      <View className="mt-12 mb-8">
        <Text className="text-3xl font-bold text-gray-800 text-center">
          Create Account
        </Text>
        <Text className="text-gray-600 text-center mt-2">
          Join CampusLoop today
        </Text>
      </View>

      {/* Form */}
      <View className="space-y-4">
        {/* Name Input */}
        <View>
          <Text className="text-gray-700 font-medium mb-2">Full Name</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Email Input */}
        <View className="mt-4">
          <Text className="text-gray-700 font-medium mb-2">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View className="mt-4">
          <Text className="text-gray-700 font-medium mb-2">Password</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity className="bg-blue-500 rounded-lg py-4 mt-6">
          <Text className="text-white text-center font-semibold text-lg">
            Create Account
          </Text>
        </TouchableOpacity>

        {/* Sign In Link */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Already have an account? </Text>
          <Link href="/Sign">
            <Text className="text-blue-500 font-medium">Sign In</Text>
          </Link>
        </View>

        {/* Back to Home */}
        <View className="mt-8">
          <Link href="/" className="self-center">
            <Text className="text-gray-500">← Back to Home</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

export default SignUp;