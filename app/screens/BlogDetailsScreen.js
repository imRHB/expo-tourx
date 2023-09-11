import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const BLOG = {
    _id: "61f29f17bcc6464acaf9cc47",
    title: "Trekking to the base camp of mountain",
    location: "Abroad/Foreign",
    address: "Serbia",
    img: "https://i.ibb.co/WFM5dww/serbia.jpg",
    description:
        "When visiting a completely new destination for the first time, it is natural to feel lost and bewildered. When planning our itinerary on how to tackle such a journey we often resort to travel agencies which offer tours meant to guide us through the city and its attractions. Among such agencies are those offering personalized tours.",
    cost: 1600,
    category: "Group Tour",
    rating: 4,
    name: "Reginald Y",
    email: "reginaldy@gmail.com",
    role: "user",
    status: "Approved",
};

const BlogDetailsScreen = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <View
                style={{
                    marginVertical: 16,
                }}
            >
                <Image
                    source={{ uri: BLOG.img }}
                    resizeMode="contain"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: 8,
                        aspectRatio: 16 / 9,
                    }}
                />
                <View style={{ paddingVertical: 16 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "#777" }}>
                                {BLOG.address}
                            </Text>
                            <Text>, </Text>
                            <Text style={{ color: "#777" }}>
                                {BLOG.location}
                            </Text>
                        </View>
                        <Text style={{ color: "#777" }}>{BLOG.category}</Text>
                    </View>
                    <View
                        style={{
                            marginVertical: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 24, fontWeight: 700 }}>
                            ${BLOG.cost}
                        </Text>
                        <Text style={{ color: "#777" }}>
                            Rating: {BLOG.rating}
                        </Text>
                    </View>
                    <View style={{ marginVertical: 8 }}>
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>
                            {BLOG.title}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16 }}>{BLOG.description}</Text>
                        <Text style={{ fontSize: 16 }}>{BLOG.description}</Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
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
                                color: "#777",
                                fontSize: 18,
                                fontWeight: 700,
                            }}
                        >
                            Author:{" "}
                        </Text>
                        <Text
                            style={{
                                color: "#8A2BE2",
                                fontSize: 18,
                                fontWeight: 700,
                            }}
                        >
                            {BLOG.name}
                        </Text>
                    </View>
                    <View
                        style={{
                            paddingVertical: 4,
                            paddingHorizontal: 16,
                            borderWidth: 1,
                            borderRadius: 4,
                            borderColor: "#8A2BE2",
                            backgroundColor: "#8A2BE2",
                        }}
                    >
                        <Pressable onPress={() => alert("Add blog")}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: "#FFF",
                                }}
                            >
                                Add Blog
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default BlogDetailsScreen;

const styles = StyleSheet.create({});
