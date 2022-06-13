import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { myColors } from "../styles/Colors";

const Detail = ({ route }) => {
  const todoRef = firebase.firestore().collection("todos");
  const [textHeading, onChangeHeadingText] = useState(route.params.item.name);
  console.log(route.params.item.todo);
  const navigation = useNavigation();
  const Data = {
    id: route.params.item.id,
    todo: route.params.item.todo,
  };

  const updateTodo = () => {
    if (textHeading && textHeading.length > 0) {
      todoRef
        .doc(route.params.item.id)
        .update({
          todo: textHeading,
        })
        .then(() => {
          navigation.navigate("Todos");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  const deleteTodo = () => {
    todoRef
      .doc(route.params.item.id)
      .delete()
      .then(() => {
        navigation.navigate("Todos");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (

    <View style={{ flex: 1, backgroundColor:myColors.pinkLight }}>
    <View
      style={{
        alignItems: "center",
        backgroundColor:myColors.pinkDark,
        marginTop : 30,
        borderRadius: 20,
        width: "85%",
        marginLeft: 30
      }}
    >
      <Text style={styles.title}>Your List</Text>
    </View>
    <View style={styles.card}>
        <Text style={styles.text}>
          {Data.todo}
        </Text>
        <FontAwesome
            name="trash-o"
            color="red"
            onPress={() => deleteTodo()}
            style={styles.todoIcon}
          />
      </View>

    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new todo"
        placeholderTextColor="#aaaaaa"
        onChangeText={onChangeHeadingText}
        value={textHeading}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={()=>{updateTodo()}}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>

    </View>
  </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: myColors.gray,
    padding: 25,
    margin: 5,
    marginTop:40,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 45,
  },
  itemHeading: {
    fontSize: 20,
    fontWeight:"bold",
    marginRight: 22,
  },
  formContainer: {
    flexDirection: "row",
    height: 70,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 420,
  },
  card:{
    flexDirection: "row",
    alignItems: "center",
    marginTop:40,
    justifyContent:"space-between",
    backgroundColor:myColors.gray,
    padding:20,
    marginHorizontal:10,
    borderRadius: 10

  },

  todoIcon:{
    fontSize:30
  },


  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: myColors.gray,
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: myColors.redDark,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color:myColors.white,
    padding:20
},
  text:{
    fontSize:20,
    fontWeight:"bold"
  }
});
