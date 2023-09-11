import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExploreBlogScreen from "./app/screens/ExploreBlogScreen";

export default function App() {
    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 8 }}>
                <ExploreBlogScreen />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
