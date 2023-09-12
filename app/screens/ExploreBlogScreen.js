import { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import BlogCard from "../components/BlogCard";

const BLOGS = [
    {
        _id: "61f1e886bcc6464aca307b5a",
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
    },
    {
        _id: "61f1e886bcc6464aca307b5e",
        title: "Experience the natural beauty of island",
        location: "Abroad/Foreign",
        address: "Canada",
        img: "https://i.ibb.co/sKpkwFc/canada.jpg",
        description:
            "With summer right around the corner and boat rental services at an all-time high, it’s time to take the boating experience to the next level. Imagine the perfect hot weather, cool crystal clear waters at your feet, and you on the deck of a white yacht, preparing to take the most refreshing dive of your life. Can life get better than that?",
        cost: 1250,
        category: "Weekend Tour",
        rating: 5,
        name: "Brunella G",
        email: "brunellag@gmail.com",
        role: "user",
        status: "Approved",
    },
    {
        _id: "61f1e886bcc6464aca307b62",
        title: "Beautiful season of the rural village",
        location: "Abroad/Foreign",
        address: "Thailand",
        img: "https://i.ibb.co/q7tjShD/thailand.jpg",
        description:
            "With summer right around the corner and boat rental services at an all-time high, it’s time to take the boating experience to the next level. Imagine the perfect hot weather, cool crystal clear waters at your feet, and you on the deck of a white yacht, preparing to take the most refreshing dive of your life. Can life get better than that?",
        cost: 2100,
        category: "Weekend Tour",
        rating: 4.5,
        name: "Brunella G",
        email: "brunellag@gmail.com",
        role: "user",
        status: "Pending",
    },
    {
        _id: "61f1e886bcc6464aca307b65",
        title: "Switzerland Tour of Couple",
        location: "Abroad/Foreign",
        address: "Switzerland",
        img: "https://i.ibb.co/C1m7RCY/disc-img-1.jpg",
        description:
            "Greek TravelTellers is a travel tour agency organizing and carrying out tailor-made tours in Athens, aiming to show visitors the local life vibes and help them discover the charm of the Greek capital while immersing themselves in the culture and customs of this ancient civilization. The key point of this agency is how personalized the tours are and how customers can either pick from a set of theme tours or set up their own tours, tailor-made for them based on their preferences.",
        cost: 4200,
        category: "Weekend Tour",
        rating: 4,
        name: "Janey B",
        email: "janeyb@gmail.com",
        role: "user",
        status: "Approved",
    },
    {
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
    },
    {
        _id: "61f29f17bcc6464acaf9cc48",
        title: "Explore rock and hill",
        location: "Abroad/Foreign",
        address: "Utah",
        img: "https://i.ibb.co/wMcc2MM/utah.jpg",
        description:
            "Greek TravelTellers is a travel tour agency organizing and carrying out tailor-made tours in Athens, aiming to show visitors the local life vibes and help them discover the charm of the Greek capital while immersing themselves in the culture and customs of this ancient civilization. The key point of this agency is how personalized the tours are and how customers can either pick from a set of theme tours or set up their own tours, tailor-made for them based on their preferences.",
        cost: 2800,
        category: "Group Tour",
        rating: 5,
        name: "Jesse H",
        email: "jesseh@gmail.com",
        role: "user",
        status: "Pending",
    },
    {
        _id: "61f29f17bcc6464acaf9cc4c",
        title: "Beautiful season of Kuala Lumpur",
        location: "Abroad/Foreign",
        address: "Kuala Lumpur",
        img: "https://i.ibb.co/djmv9MK/kualalumpur.jpg",
        description:
            "Greek TravelTellers is a travel tour agency organizing and carrying out tailor-made tours in Athens, aiming to show visitors the local life vibes and help them discover the charm of the Greek capital while immersing themselves in the culture and customs of this ancient civilization. The key point of this agency is how personalized the tours are and how customers can either pick from a set of theme tours or set up their own tours, tailor-made for them based on their preferences.",
        cost: 2500,
        category: "Weekend Tour",
        rating: 4,
        name: "Annamaria F",
        email: "annmariaf@gmail.com",
        role: "user",
        status: "Pending",
    },
    {
        _id: "61f29f17bcc6464acaf9cc4f",
        title: "Beautiful season of the rural village",
        location: "Abroad/Foreign",
        address: "Thailand",
        img: "https://i.ibb.co/q7tjShD/thailand.jpg",
        description:
            "With summer right around the corner and boat rental services at an all-time high, it's time to take the boating experience to the next level. Imagine the perfect hot weather, cool crystal clear waters at your feet, and you on the deck of a white yacht, preparing to take the most refreshing dive of your life. Can life get better than that?",
        cost: 2100,
        category: "Weekend Tour",
        rating: 4.5,
        name: "Brunella G",
        email: "brunellag@gmail.com",
        role: "user",
        status: "Pending",
    },
];

const ExploreBlogScreen = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getBlogs = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                "https://tour-x-amky.onrender.com/blogs"
            );
            const result = await response.json();
            setBlogs(result);
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
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
            >
                <FlatList
                    data={blogs}
                    renderItem={({ item }) => <BlogCard blog={item} />}
                    keyExtractor={(item) => item._id}
                />
            </ScrollView>
        </View>
    );
};

export default ExploreBlogScreen;
