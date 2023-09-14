import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../config/colors";
import spacing from "../config/spacing";

const BlogDetailsScreen = ({ navigation, route }) => {
    const { item } = route.params;

    return (
        <SafeAreaView style={{ marginHorizontal: spacing.SM }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View
                    style={{
                        marginVertical: spacing.MD,
                    }}
                >
                    <Image
                        source={{ uri: item.img }}
                        resizeMode="contain"
                        style={{
                            borderRadius: spacing.SM,
                            aspectRatio: 16 / 9,
                        }}
                    />
                    <View style={{ paddingVertical: spacing.MD }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: colors.GRAY }}>
                                    {item.address}
                                </Text>
                                <Text>, </Text>
                                <Text style={{ color: colors.GRAY }}>
                                    {item.location}
                                </Text>
                            </View>
                            <Text style={{ color: colors.GRAY }}>
                                {item.category}
                            </Text>
                        </View>
                        <View
                            style={{
                                marginVertical: spacing.SM,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: spacing.LG,
                                    fontWeight: 700,
                                }}
                            >
                                ${item.cost}
                            </Text>
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
                                    {item.rating}
                                </Text>
                                <MaterialCommunityIcons
                                    name="star"
                                    size={spacing.BASE}
                                    color={colors.PRIMARY}
                                    marginLeft={spacing.XXS}
                                />
                            </View>
                        </View>
                        <View style={{ marginVertical: spacing.SM }}>
                            <Text
                                style={{
                                    fontSize: spacing.LG,
                                    fontWeight: 700,
                                }}
                            >
                                {item.title}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: spacing.BASE }}>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginVertical: spacing.BASE,
                        }}
                    >
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
                                    fontWeight: 700,
                                }}
                            >
                                Author:{" "}
                            </Text>
                            <Text
                                style={{
                                    color: colors.PRIMARY,
                                    fontSize: spacing.BASE,
                                    fontWeight: 700,
                                }}
                            >
                                {item.name}
                            </Text>
                        </View>
                        {/* <TouchableOpacity
                            onPress={() => navigation.navigate("Modal")}
                            style={{
                                width: "50%",
                                paddingVertical: spacing.SM,
                                paddingHorizontal: spacing.BASE,
                                borderWidth: spacing.XXS,
                                borderRadius: spacing.XS,
                                borderColor: colors.PRIMARY,
                                backgroundColor: colors.PRIMARY,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: spacing.BASE,
                                    fontWeight: 700,
                                    textAlign: "center",
                                    color: colors.LIGHT,
                                }}
                            >
                                Add Blog
                            </Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BlogDetailsScreen;
