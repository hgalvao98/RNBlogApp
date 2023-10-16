import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../../welcome/welcome.style";
import PostCard from "../../common/PostCard/PostCard";

function NewPosts({ data }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 500 }}>Recent Posts</Text>
      <ScrollView style={{ padding: 5 }}>
        {data?.map((post) => (
          <PostCard key={post.post_id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
}

export default NewPosts;
