import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";

export default function BlogCard({ blog }) {
    const navigation = useNavigation();

    const { title, location, address, img } = blog;

    return (
        <Pressable
            onPress={() =>
                navigation.navigate("BlogDetailsScreen", { item: blog })
            }
            style={{
                marginVertical: 16,
                backgroundColor: "#F8F8F8",
                borderRadius: 8,
            }}
        >
            <Image
                source={{ uri: img }}
                style={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    aspectRatio: 16 / 9,
                }}
            />
            <View style={{ padding: 16 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ color: "#777" }}>{address}</Text>
                    <Text style={{ color: "#777" }}>{location}</Text>
                </View>
                <View style={{ marginTop: 12 }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        {title}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}
