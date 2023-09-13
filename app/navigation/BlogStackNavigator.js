import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExploreBlogScreen from "../screens/ExploreBlogScreen";

const BlogStack = createNativeStackNavigator();

export default function BlogStackNavigator() {
    return (
        <BlogStack.Navigator>
            <BlogStack.Screen name="Explore" component={ExploreBlogScreen} />
        </BlogStack.Navigator>
    );
}

/* not used */
