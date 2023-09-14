import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";

import colors from "../config/colors";
import spacing from "../config/spacing";

export default function BlogCard({ blog }) {
    const navigation = useNavigation();

    const { title, address, img, rating } = blog;

    return (
        <Pressable
            onPress={() => navigation.navigate("BlogDetails", { item: blog })}
            style={{
                marginVertical: spacing.MD,
                backgroundColor: colors.LIGHT,
                borderRadius: spacing.SM,
            }}
        >
            <Image
                source={{ uri: img }}
                style={{
                    borderTopLeftRadius: spacing.SM,
                    borderTopRightRadius: spacing.SM,
                    aspectRatio: 16 / 9,
                }}
            />
            <View style={{ padding: spacing.MD }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ color: colors.GRAY }}>{address}</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                color: colors.GRAY,
                                fontSize: spacing.BASE,
                                fontWeight: "700",
                            }}
                        >
                            {rating}
                        </Text>
                        <MaterialCommunityIcons
                            name="star"
                            size={spacing.BASE}
                            color={colors.PRIMARY}
                            marginLeft={spacing.XXS}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 12 }}>
                    <Text
                        style={{
                            fontSize: spacing.BASE,
                            fontWeight: 700,
                            color: colors.DARK,
                        }}
                    >
                        {title}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}
