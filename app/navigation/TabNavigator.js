import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExploreBlogScreen from "../screens/ExploreBlogScreen";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ header: () => null }}>
            <Tab.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    tabBarStyle: { display: "none" },
                    tabBarButton: () => null,
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => <FontAwesome name="home" size={24} />,
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreBlogScreen}
                options={{
                    tabBarIcon: () => <FontAwesome name="book" size={24} />,
                }}
            />
        </Tab.Navigator>
    );
}
