import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlicer";

export const Item = ({ todo, id, time }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.todoContainer}>
            <View style={styles.todoContainerInside}>
                <Text style={styles.todoText}>{todo}</Text>
                <Pressable>
                    <Octicons
                        name="trash"
                        size={20}
                        color="#FFF"
                        onPress={(e) => dispatch(removeTodo(id))}
                    />
                </Pressable>
            </View>
            <View>
                <Text style={styles.todoTime}>{time}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    todoContainer: {
        marginBottom: 5,
    },
    todoText: {
        color: "#FFF",
    },
    todoContainerInside: {
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#E11F65",
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
    },
    todoTime: {
        fontSize: 12,
        color: "#707070",
        marginTop: 5,
        marginBottom: 10,
    },
});
