import { MaterialIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import {
  BackHandler,
  FlatList,
  Keyboard,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { Switch } from "react-native-paper";
import { globalStyles } from "../Globals";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "BvS", rating: 2, body: "lorem ipsum", key: "1" },
    { title: "Avengers", rating: 4, body: "lorem ipsum", key: "2" },
    { title: "Logan", rating: 5, body: "lorem ipsum", key: "3" },
    { title: "X-Men", rating: 5, body: "lorem ipsum", key: "4" },
    { title: "Paul", rating: 5, body: "lorem ipsum", key: "5" },
    { title: "Iron Man", rating: 5, body: "lorem ipsum", key: "6" },
    { title: "Spider-Man", rating: 5, body: "lorem ipsum", key: "7" },
    { title: "Cpt America", rating: 5, body: "lorem ipsum", key: "8" },
    { title: "Black Widow", rating: 5, body: "lorem ipsum", key: "9" },
    { title: "Black Panther", rating: 5, body: "lorem ipsum", key: "10" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  let backBtnClickCount = 0;

  const backAction = () => {
    if (navigation.isFocused()) {
      backBtnClickCount++;
      if (backBtnClickCount == 2) {
        BackHandler.exitApp();
      } else {
        ToastAndroid.show("Press Again To Exit !", ToastAndroid.SHORT);
      }
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const addMovie = (val) => {
    console.log(reviews);
    setReviews((prev) => {
      val.key = (prev.length + 1).toString();
      return [val, ...prev];
    });
    setModalOpen(false);
  };
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View
      style={[globalStyles.container, isEnabled && globalStyles.darkContainer]}>
      <StatusBar backgroundColor="#FDD835" />
      <Modal
        isVisible={modalOpen}
        swipeDirection={["down", "left", "right"]}
        onSwipeComplete={() => setModalOpen(false)}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View
            style={[styles.modalContent, isEnabled && styles.darkModalContent]}>
            <MaterialIcons
              name="close"
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              size={28}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addMovie={addMovie} isEnabled={isEnabled} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.btnView}>
        <MaterialIcons
          name="add"
          style={styles.modalToggle}
          size={28}
          onPress={() => setModalOpen(true)}
        />
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#E64A19" }}
          thumbColor={isEnabled ? "#ffeb3b" : "#ddd"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled((prev) => !prev)}
          value={isEnabled}
        />
      </View>
      <FlatList
        data={reviews}
        fadingEdgeLength={60}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={{ marginVertical: 5 }}
            onPress={() =>
              navigation.navigate("ReviewDetails", { ...item, isEnabled })
            }>
            <Card isEnabled={isEnabled}>
              <Text
                style={[
                  globalStyles.titleText,
                  isEnabled && globalStyles.darkTitleText,
                ]}>
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 0,
    padding: 10,
    backgroundColor: "#E64A19",
    borderRadius: 100,
    color: "#fff",
    elevation: 12,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 10,
    marginBottom: 0,
  },
  modalContent: {
    backgroundColor: "#ddd",
    borderRadius: 10,
    flex: 1,
  },
  darkModalContent: {
    backgroundColor: "#333",
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  switch: {
    position: "absolute",
    right: 0,
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
});
