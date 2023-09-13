// import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeTab() {
    const [blog, setBlog] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { _id, title, location, address, img } = blog;

    const getBlog = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://tour-x-amky.onrender.com/blogs/61f1e886bcc6464aca307b5a`
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
    }, []);

    return (
        <SafeAreaView style={{ marginHorizontal: 8 }}>
            <Stack.Screen options={{ header: () => null }} />
            <View
                style={{
                    margin: 20,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Link href={`/blog/1`}>Blog 1</Link>
                <Link href={`/blog/2`}>Blog 2</Link>
                <Link href={`/blog/3`}>Blog 3</Link>
            </View>

            <View
                style={{
                    marginVertical: 16,
                    backgroundColor: "#F8F8F8",
                    borderRadius: 8,
                }}
            >
                <Link href={`/blog/${_id}`}>
                    <View>
                        <Image
                            source={{
                                uri: img,
                            }}
                            width={450}
                            height={250}
                            resizeMethod="resize"
                            resizeMode="contain"
                            style={{
                                // maxWidth: "100%",
                                // height: "auto",
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                // aspectRatio: 16 / 9,
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
                                <Text style={{ color: "#777" }}>
                                    {location}
                                </Text>
                            </View>
                            <View style={{ marginTop: 8 }}>
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
                    </View>
                </Link>
            </View>
        </SafeAreaView>
    );
}
