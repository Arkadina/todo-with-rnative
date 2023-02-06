import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function Button() {
    const navigation = useNavigation();
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={styles.buttonLink}
                onPress={(e) => navigation.navigate("AddTodo")}
            >
                <Text style={styles.buttonText}>Add todo</Text>
                <MaterialIcons name="post-add" size={20} color="#FFF" />
            </Pressable>
            <Pressable
                style={styles.buttonLink2}
                onPress={(e) => navigation.navigate("RenderTodo")}
            >
                <Text style={styles.buttonText}>See todos</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 0,
        flexDirection: "row",
        alignSelf: "flex-end",
        marginBottom: 15,
    },
    buttonLink: {
        flex: 0,
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 30,
        backgroundColor: "#E11F65",
        borderRadius: 4,
        elevation: 5,
        marginRight: 5,
    },
    buttonLink2: {
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 25,
        backgroundColor: "#E11F65",
        borderRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
        marginRight: 5,
    },
});
