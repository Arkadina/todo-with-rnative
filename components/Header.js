import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
    const data = useSelector((state) => state.todoReducer);
    console.log(data);
    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>myTodo.</Text>
            <Pressable>
                <Text style={styles.pressableText}>Add todo</Text>
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
    },
});
