import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: () => <FontAwesome name="home" size={24} />,
                }}
            />
            <Tabs.Screen
                name="blog"
                options={{
                    title: "Blog",
                    tabBarIcon: () => <FontAwesome name="book" size={24} />,
                }}
            />
        </Tabs>
    );
}
