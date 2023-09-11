import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BlogCard = ({ blog }) => {
    const { title, location, address, img, description } = blog;

    return (
        <TouchableOpacity>
            <View
                style={{
                    marginVertical: 16,
                    backgroundColor: "#F8F8F8",
                    borderRadius: 8,
                }}
            >
                <Image
                    source={{ uri: img }}
                    resizeMode="contain"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
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
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>
                            {title}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default BlogCard;

const styles = StyleSheet.create({});
