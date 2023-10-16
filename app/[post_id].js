import { Stack, useGlobalSearchParams } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import useFetch from "../hooks/useFetch";
import { COLORS } from "../constants";
import PostDetails from "../components/post/Post";

function Post() {
  const params = useGlobalSearchParams();
  const [refreshing, setRefreshing] = useState(false);

  const { data, error, isLoading, refetch } = useFetch(
    `posts/${params.post_id}`
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <PostDetails post={data} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Post;
