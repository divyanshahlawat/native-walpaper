import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView>
      <View>
        <Link href={"/account"}>
          <Text>Take me account page</Text>
        </Link>
        <Link href={"/foryou"}>
          <Text>Take me to for you hfell</Text>
        </Link>
        <Link href={"/explore"}>
          <Text>Take me to </Text>
        </Link>
        <Slot />
      </View>
    </SafeAreaView>
  );
}
