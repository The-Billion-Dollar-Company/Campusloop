import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = () => {
    // Add your authentication logic here
    // For now, just navigate to the main app
    router.replace("/(tabs)/home");
  };

  return (
    <View className="flex-1 bg-primary-50 px-6 py-8">
      {/* Header */}
      <View className="mt-12 mb-8">
        <Text className="text-3xl font-bold text-gray-800 text-center">
          Welcome Back
        </Text>
        <Text className="text-gray-600 text-center mt-2">
          Sign in to continue to CampusLoop
        </Text>
      </View>

      {/* Form */}
      <View className="space-y-4">
        {/* Email Input */}
        <View>
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
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity className="self-end mt-2">
          <Text className="text-blue-500 font-medium">Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity
          className="bg-campus-sage rounded-lg py-4 mt-6"
          onPress={handleSignIn}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center mt-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Sign Up Link */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Don't have an account? </Text>
          <Link href="/SignUp">
            <Text className="text-blue-500 font-medium">Sign Up</Text>
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

export default Sign;