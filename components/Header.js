import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable onPress={(e) => navigation.navigate("Home")}>
                <Text style={styles.logoText}>myTodo.</Text>
            </Pressable>
            <Pressable onPress={(e) => navigation.navigate("RenderTodo")}>
                <Text style={styles.pressableText}>Todo list</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#CA0049",
        height: 170,
        width: "100%",
        padding: 20,
    },
    logoText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 24,
    },
    pressableText: {
        color: "#FFF",
        textAlign: "center",
        position: "relative",
        top: 8,
    },
});
