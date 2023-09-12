import { useRootNavigationState, useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function App() {
    const router = useRouter();
    const rootNavState = useRootNavigationState();

    if (!rootNavState?.key) return;

    /* useEffect(() => {
        router.replace("/(tabs)/home");
    }, []); */
    // return <Redirect href={"/(tabs)/home"} />;
    router.replace("/(tabs)/home");
}

const styles = StyleSheet.create({});
