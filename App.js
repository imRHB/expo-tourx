import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./app/navigation/TabNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}
