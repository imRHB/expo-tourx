import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BlogDetailsScreen from "./app/screens/BlogDetailsScreen";

export default function App() {
    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 8 }}>
                <BlogDetailsScreen />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
