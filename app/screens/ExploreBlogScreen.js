import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BlogCard from "../components/BlogCard";
import spacing from "../config/spacing";

const BLOGS = require("../../assets/blogs.json") || [];

export default function ExploreBlogScreen() {
    /* const getBlogs = async () => {
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
    }; */

    /* useEffect(() => {
        getBlogs();
    }, []); */

    return (
        <SafeAreaView style={{ marginHorizontal: spacing.SM }}>
            <View>
                {/* {BLOGS.length === 0 ? (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "50%",
                        }}
                    >
                        <ActivityIndicator
                            size="large"
                            color={colors.PRIMARY}
                        />
                    </View>
                ) : (
                    <FlatList
                        data={BLOGS}
                        renderItem={({ item }) => <BlogCard blog={item} />}
                        keyExtractor={(item) => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                )} */}
                <FlatList
                    data={BLOGS}
                    renderItem={({ item }) => <BlogCard blog={item} />}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}
