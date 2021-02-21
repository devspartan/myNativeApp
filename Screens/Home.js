import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Touchable,
  FlatList,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { ApolloProvider, useQuery, gql } from "@apollo/client";
import { MaterialIcons } from "@expo/vector-icons";

export default function RootComponent({ navigation }) {
  const [name, setName] = useState();
  const [taskList, setTaskList] = useState([
    { name: "hello", key: "1" },
    { name: "another name", key: "2" },
  ]);
  const [age, setAge] = useState(20);
  const [selectedId, setSelectedId] = useState(null);

  const clickHandler = () => {
    if (name !== "") {
      console.log(name, "i for in");
      setTaskList((prev) => [...prev, { name, key: Math.random() }]);
      setName("");
    }
  };

  const handleDelte = (id) => {
    const tempList = taskList.filter((item) => item.key !== id);
    setTaskList(tempList);
  };

  const Item = ({ item, onPress, style }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: 280,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 5,
            paddingHorizontal: 12,
            paddingVertical: 12,
          }}
        >
          <Text style={{ fontSize: 16, width: "92%" }}>{item.name}</Text>
          <MaterialIcons
            style={{ borderRadius: 15, padding: 2, color: 'red' }}
            onPress={() => {
              onPress();
              handleDelte(item.key);
            }}
            name="delete"
            size={22}
            color="black"
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.key === selectedId ? "#ccc" : "#fff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.key)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={require('../assets/bg.png')} style={styles.body}>
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // backgroundColor: 'red'
          }}
        >
          <View
            style={{
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            <TextInput
              value={name}
              onChangeText={(e) => setName(e)}
              style={styles.input}
              placeholder="Task"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Task" onPress={clickHandler} />
          </View>
          <View style={styles.section}>
            <View style={{ flex: 1 }}>
              <FlatList
                data={taskList}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item) => `'${item.key}'`}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: "flex",
    paddingTop: 30,
    paddingBottom: 30,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: "orange",
  },
  headerText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    // fontWeight: "700",
    color: "white",
    textAlign: "center",
  },

  heading: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    width: 280,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  button: {
    width: 280,
    marginBottom: 20,
  },
  section: {
    flex: 1,
    height: 400,
  },
});
