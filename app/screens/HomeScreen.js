import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BlogCard from "../components/BlogCard";
import spacing from "../config/spacing";

const BLOGS = require("../../assets/blogs.json") || [];

export default function HomeScreen() {
    const TOP_RATED_BLOGS = BLOGS?.map((blog) =>
        blog.rating === 5 ? blog : ""
    ).filter(Boolean);

    /* const getBlogs = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                "https://tour-x-amky.onrender.com/blogs"
            );
            const data = await response.json();
            const highRatedBlogs = data.blogs
                ?.map((blog) => (blog.rating === 5 ? blog : ""))
                .filter(Boolean);
            setBlogs(highRatedBlogs);
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
                {/* {isLoading ? (
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
                        data={blogs}
                        renderItem={({ item }) => <BlogCard blog={item} />}
                        keyExtractor={(item) => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                )} */}
                <FlatList
                    data={TOP_RATED_BLOGS}
                    renderItem={({ item }) => <BlogCard blog={item} />}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}
