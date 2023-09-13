import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 8,
            }}
        >
            <Text style={{ fontSize: 48, fontWeight: "900", color: "#ef4444" }}>
                TourX
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "500",
                    color: "#3f3f46",
                    marginTop: 4,
                }}
            >
                Share Your Tour Experience
            </Text>
            <View style={{ margin: "50%" }} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{
                    backgroundColor: "#ef4444",
                    width: "80%",
                    padding: 16,
                    borderRadius: 8,
                }}
            >
                <Text
                    style={{
                        color: "#FAFAFA",
                        fontSize: 20,
                        fontWeight: "700",
                        textAlign: "center",
                    }}
                >
                    Get Started
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
