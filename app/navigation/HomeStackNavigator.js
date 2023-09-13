import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return (
        <HomeStack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ header: () => null }}
        >
            <HomeStack.Screen name="Welcome" component={WelcomeScreen} />
            {/* <HomeStack.Screen name="Home" component={HomeScreen} /> */}
        </HomeStack.Navigator>
    );
}

/* not used */
