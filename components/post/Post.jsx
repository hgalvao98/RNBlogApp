import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./post.style";
import { COLORS } from "../../constants";
import icons from "../../constants/icons";

function PostDetails({ post }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 500 }}>{post.title}</Text>
      <Text
        style={{
          padding: 5,
          backgroundColor: COLORS.lightGray,
          borderRadius: 5,
        }}
      >
        {post.content}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Comments</Text>
        <Text>{post.comments?.length}</Text>
      </View>
      <View
        style={{
          borderBottomColor: COLORS.gray2,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <ScrollView>
        {post.comments && post.comments.length === 0 && (
          <Text>No comments to display</Text>
        )}
        {post.comments?.map((comment) => (
          <View
            key={comment.comment_id}
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: COLORS.lightGray,
              borderRadius: 5,
            }}
          >
            <Image
              source={{
                uri: "https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-479x512-n8sg74wg.png",
              }}
              resizeMode="contain"
              style={{ width: 15, height: 15 }}
            />
            <Text>{comment.content}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Add comment"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.plus}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PostDetails;
