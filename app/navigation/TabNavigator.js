import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colors from "../config/colors";
import BlogDetailsScreen from "../screens/BlogDetailsScreen";
import ExploreBlogScreen from "../screens/ExploreBlogScreen";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: () => null,
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused
                            ? "home-variant"
                            : "home-variant-outline";
                    } else if (route.name === "Explore") {
                        iconName = focused
                            ? "book-multiple"
                            : "book-multiple-outline";
                    }

                    return (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={28}
                            color={colors.PRIMARY}
                        />
                    );
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: colors.LIGHT,
                },
            })}
        >
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
                /* options={{
                    tabBarIcon: () => <FontAwesome name="home" size={24} />,
                }} */
            />
            <Tab.Screen
                name="Explore"
                component={ExploreBlogScreen}
                /* options={{
                    tabBarIcon: () => <FontAwesome name="book" size={24} />,
                }} */
            />
            <Tab.Screen
                name="BlogDetails"
                component={BlogDetailsScreen}
                options={{ tabBarButton: () => null }}
            />
        </Tab.Navigator>
    );
}
