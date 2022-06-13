import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import Button from "../components/button";
import { Styles } from "../styles/GlobalStyle";

export default function Calculator() {
  const [number, setNumber] = useState("");
  const [displayNumber, setDisplayNumber] = useState(0);

  console.log(number);
  const handleNumberPress = (e) => {
    setNumber(number + e);
  };

  const handleOperationPress = (e) => {
    setNumber(number + e);
  };

  const handleNumberPercent = () => {
    setNumber(number / 100);
  };

  const getResult = () => {
    setNumber(eval("(" + number + ")").toString());
    setDisplayNumber(number);
  };

  const clear = () => {
    setNumber("");
    setDisplayNumber("");
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 150,
          width: 320,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <View style={{
          display:"flex",
          justifyContent:"flex-end",
        }}>
        <Text style={[Styles.screenFirstNumber, { fontSize: 25, borderTopEndRadius: 20, borderTopStartRadius: 20 }]}>{displayNumber}</Text>
        <Text style={[Styles.screenFirstNumber, { fontSize: 50, borderBottomEndRadius: 20, borderBottomStartRadius: 20 }]}>{number ? number : "0"}</Text>
        </View>
      </View>

      <View style={Styles.row}>
        <Button title={"1"} onPress={() => handleNumberPress("1")} />
        <Button title={"2"} onPress={() => handleNumberPress("2")} />
        <Button title={"-"} isBlue onPress={() => handleOperationPress("-")} />
        <Button title={"+"} isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title={"3"} onPress={() => handleNumberPress("3")} />
        <Button title={"4"} onPress={() => handleNumberPress("4")} />
        <Button title={"/"} isBlue onPress={() => handleOperationPress("/")} />
        <Button title={"×"} isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title={"5"} onPress={() => handleNumberPress("5")} />
        <Button title={"6"} onPress={() => handleNumberPress("6")} />
        <Button title={"%"} isGray onPress={() => handleNumberPercent("%")} />
        <Button title={"="} isBlue onPress={() => getResult()} />
      </View>
      <View style={Styles.row}>
        <Button title={"7"} onPress={() => handleNumberPress("7")} />
        <Button title={"8"} onPress={() => handleNumberPress("8")} />
        <Button title={"9"} onPress={() => handleNumberPress("9")} />
        <Button title={"0"} onPress={() => handleNumberPress("0")} />
      </View>
      <View style={Styles.row}>
        <Button title={"⌫"} onPress={() => setNumber(number.slice(0, -1))} />
        <Button title={"C"} onPress={clear} />
      </View>
    </View>
  );
}
