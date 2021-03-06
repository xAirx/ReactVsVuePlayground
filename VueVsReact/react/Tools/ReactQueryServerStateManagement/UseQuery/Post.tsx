import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useQuery } from "react-query";

import { Text } from "../ReactNativeReactQuery/react-query-intro/App/components/Text";
import colors from "../ReactNativeReactQuery/react-query-intro/App/constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    paddingVertical: 10,
  },
});

export const Post = ({ route }) => {
  const post = route?.params?.post;

  const { data: comments } = useQuery(["comments", post.id], () =>
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    ).then((res) => res.json())
  );

  return (
    <ScrollView style={styles.container}>
      <Text type="header">{post.title}</Text>
      <Text>{post.body}</Text>
      {comments && comments.length > 0 && (
        <>
          <Text type="header" style={{ marginTop: 20 }}>
            Comments
          </Text>
          {comments.map((comment) => (
            <View key={comment.id} style={styles.item}>
              <Text>{comment.body}</Text>
              <Text>{comment.email}</Text>
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
};
