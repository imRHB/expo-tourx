// import { Stack, useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from "react-native";

export default function BlogDetails() {
    const { blogId } = useGlobalSearchParams();

    const [blog, setBlog] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getBlog = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://tour-x-amky.onrender.com/blogs/${blogId}`
            );
            const data = await response.json();
            setBlog(data);
            setIsLoading(false);
        } catch (error) {
            console.log("🚀 ~ file: index.js:16 ~ getBlogs ~ error:", error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBlog();
    }, [blogId]);

    return (
        <SafeAreaView style={{ marginHorizontal: 8 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Stack.Screen options={{ header: () => null }} />
                {isLoading ? (
                    <View
                        style={{
                            marginVertical: 50,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text>loading...</Text>
                    </View>
                ) : (
                    <View
                        style={{
                            marginVertical: 16,
                        }}
                    >
                        <Image
                            source={{ uri: blog.img }}
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
                                        {blog.address}
                                    </Text>
                                    <Text>, </Text>
                                    <Text style={{ color: "#777" }}>
                                        {blog.location}
                                    </Text>
                                </View>
                                <Text style={{ color: "#777" }}>
                                    {blog.category}
                                </Text>
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
                                    ${blog.cost}
                                </Text>
                                <Text style={{ color: "#777" }}>
                                    Rating: {blog.rating}
                                </Text>
                            </View>
                            <View style={{ marginVertical: 8 }}>
                                <Text style={{ fontSize: 18, fontWeight: 700 }}>
                                    {blog.title}
                                </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 16 }}>
                                    {blog.description}
                                </Text>
                                <Text style={{ fontSize: 16 }}>
                                    {blog.description}
                                    {blog.description}
                                    {blog.description}
                                    {blog.description}
                                </Text>
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
                                    {blog.name}
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
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
