import { Stack } from "expo-router";
import React from "react";
import { Text, View, SafeAreaView, ActivityIndicator } from "react-native";
import { COLORS } from "../constants";
import { Welcome, NewPosts } from "../components";
import useFetch from "../hooks/useFetch";
import { ScrollView } from "react-native-gesture-handler";

function Home() {
  const { data, isLoading, error, refetch } = useFetch("posts/");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <View>
          <Welcome />
          <NewPosts data={data} />
        </View>
      )}
    </SafeAreaView>
  );
}

export default Home;
