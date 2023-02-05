import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Header from "../components/Header";

export default function AddTodo() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Header />
                <View
                    style={[
                        styles.container,
                        {
                            height: Dimensions.get("window").height - 120,
                            flex: 0,
                            alignItems: "center",
                        },
                    ]}
                >
                    <View
                        style={{
                            flex: 0,
                            flexDirection: "row",
                            alignSelf: "flex-end",
                        }}
                    >
                        <Pressable style={styles.buttonLink}>
                            <Text style={styles.buttonText}>Add todo</Text>
                            <MaterialIcons
                                name="post-add"
                                size={20}
                                color="#FFF"
                            />
                        </Pressable>
                        <Pressable style={styles.buttonLink2}>
                            <Text style={styles.buttonText}>See todos</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 50,
        top: -50,
        padding: 20,
        elevation: 10,
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
