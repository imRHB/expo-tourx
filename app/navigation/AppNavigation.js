import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogDetailsScreen from "../screens/BlogDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{ header: () => null }}
            >
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Explore" component={BlogDetailsScreen} />
                <Stack.Screen
                    name="BlogDetails"
                    component={BlogDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
