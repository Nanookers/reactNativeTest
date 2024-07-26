import { Text, TextInput, View } from "react-native";

export default function Index() {

  const name: string = 'Connor'

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello, I am {name}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'blue',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
}
