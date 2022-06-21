import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../Globals";
import Card from "../shared/Card";

export default function ReviewDetails({
  route: {
    params: { title, rating, body, isEnabled },
  },
}) {
  const images = {
    ratings: {
      "1": require("../assets/rating-1.png"),
      "2": require("../assets/rating-2.png"),
      "3": require("../assets/rating-3.png"),
      "4": require("../assets/rating-4.png"),
      "5": require("../assets/rating-5.png"),
    },
  };
  return (
    <View
      style={[globalStyles.container, isEnabled && globalStyles.darkContainer]}>
      <Card isEnabled={isEnabled}>
        <Text style={isEnabled && globalStyles.darkTitleText}>
          Movie Name - {title}
        </Text>
        <Text style={isEnabled && globalStyles.darkTitleText}>
          Movie Rating - {rating}
        </Text>
        <Text style={isEnabled && globalStyles.darkTitleText}>
          Movie Details - {body}
        </Text>
        <View style={styles.rating}>
          <Text style={isEnabled && globalStyles.darkTitleText}>
            GameZone Rating -{" "}
          </Text>
          {rating && (
            <Image
              style={{ width: 100 }}
              resizeMode="contain"
              source={images.ratings[rating]}
            />
          )}
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#aaa",
  },
});
