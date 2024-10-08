import React from "react";
import { TouchableOpacity, View, ScrollView } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Text } from "~/components/ui/text";
import { PopularJobs } from "~/components/pages/dashboard/popular/popular-jobs";
import { NearbyJobs } from "~/components/pages/dashboard/nearby/nearby-jobs";
import { useRouter } from "expo-router";
import { useAuthActions } from "~/store/auth/AuthStore";

export default function Main() {
  const { user } = useUser();
  const router = useRouter();
  const { onLogout } = useAuthActions();

  return (
    <View className="flex-1">
      <ScrollView className="flex-1 p-2">
        <View className="flex-row justify-between items-center mt-5">
          <Text className="text-lg font-light p-2">
            Hello, {user?.username}
          </Text>
          <TouchableOpacity onPress={() => onLogout()}>
            <Text className="text-gray-600 p-2">logout</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-5 flex-row justify-between items-center p-3">
          <Text className="text-2xl">Popular Jobs</Text>
        </View>
        <PopularJobs />

        <View className="flex-row justify-between items-center p-3">
          <TouchableOpacity>
            <Text className="text-2xl">Nearby jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/jobs")}>
            <Text className="text-gray-600">Show all</Text>
          </TouchableOpacity>
        </View>
        <NearbyJobs />
      </ScrollView>
    </View>
  );
}
