import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BlogCard from "../../components/BlogCard";

export default function BlogTab() {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getBlogs = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                "https://tour-x-amky.onrender.com/blogs"
            );
            const data = await response.json();
            setBlogs(data.blogs);
            setIsLoading(false);
        } catch (error) {
            console.log("🚀 ~ file: index.js:16 ~ getBlogs ~ error:", error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

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
                    <FlatList
                        data={blogs}
                        renderItem={({ item }) => <BlogCard blog={item} />}
                        keyExtractor={(item) => item._id}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
