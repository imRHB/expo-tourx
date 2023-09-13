import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BlogCard from "../components/BlogCard";

const ExploreBlogScreen = () => {
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
            <View>
                {isLoading ? (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "50%",
                        }}
                    >
                        <ActivityIndicator size="large" color="#ef4444" />
                    </View>
                ) : (
                    <FlatList
                        data={blogs}
                        renderItem={({ item }) => <BlogCard blog={item} />}
                        keyExtractor={(item) => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default ExploreBlogScreen;
