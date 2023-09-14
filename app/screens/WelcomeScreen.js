import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../config/colors";
import spacing from "../config/spacing";

export default function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: spacing.SM,
            }}
        >
            <Text
                style={{
                    fontSize: spacing["3XL"],
                    fontWeight: "900",
                    color: colors.PRIMARY,
                }}
            >
                TourX
            </Text>
            <Text
                style={{
                    fontSize: spacing.BASE,
                    fontWeight: "500",
                    color: colors.GRAY,
                    marginTop: spacing.XS,
                }}
            >
                Explore Tour Experience
            </Text>
            <View style={{ margin: "50%" }} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{
                    backgroundColor: colors.PRIMARY,
                    width: "80%",
                    padding: spacing.BASE,
                    borderRadius: spacing.SM,
                }}
            >
                <Text
                    style={{
                        color: colors.LIGHT,
                        fontSize: spacing.LG,
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
