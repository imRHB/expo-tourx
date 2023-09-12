import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function BlogCard({ blog }) {
    const { _id, title, location, address, img } = blog;

    return (
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
                        source={{ uri: "https://i.ibb.co/WFM5dww/serbia.jpg" }}
                        style={{
                            width: 400,
                            height: 250,
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
                            <Text style={{ color: "#777" }}>{location}</Text>
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
    );
}

/* 

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

*/
