import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../constants";
import { useRouter } from "expo-router";

function PostCard({ post }) {
  const { title, content, comments, post_id } = post;
  const router = useRouter();

  const handlePress = (post) => {
    router.push(`/${post.post_id}`);
  };

  return (
    <TouchableOpacity
      onPress={() => handlePress(post)}
      style={{
        padding: 10,
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        gap: 10,
        marginTop: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            padding: 5,
            borderRadius: 100,
            borderColor: COLORS.gray2,
            borderWidth: 1,
          }}
        >
          <Image
            source={{
              uri: "https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-479x512-n8sg74wg.png",
            }}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <Text style={{ fontSize: 20 }}>{title}</Text>
      </View>
      <Text
        style={{ fontSize: 15, paddingLeft: 0, color: COLORS.gray }}
        numberOfLines={2}
      >
        {content}
      </Text>
      <View
        style={{
          borderBottomColor: COLORS.gray2,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={{ alignItems: "flex-end" }}>
        <Text>
          {comments} {comments === 1 ? "comment" : "comments"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default PostCard;
