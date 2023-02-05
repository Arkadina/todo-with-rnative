import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Header from "../components/Header";
import { useSelector } from "react-redux";

export default function Home() {
    console.log(Dimensions.get("window"));
    const data = useSelector((state) => state.todoReducer);
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Header />
                    <View
                        style={[
                            styles.container,
                            { height: Dimensions.get("window").height - 120 },
                        ]}
                    >
                        {data.todosLength == 0 ? (
                            <View style={styles.containerNoText}>
                                <Text style={styles.textNoTodo}>
                                    Ops! Looks like you don’t have any todo.
                                </Text>
                                <View
                                    style={{
                                        flex: 0,
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.textSmallNoTodo}>
                                        create now
                                    </Text>
                                    <AntDesign
                                        name="appstore1"
                                        size={12}
                                        color="#CA0049"
                                    />
                                </View>
                            </View>
                        ) : (
                            <Text>"Todo"</Text>
                        )}
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 50,
        top: -50,
        padding: 20,
    },
    containerNoText: {
        flex: 0,
        alignContent: "center",
        alignItems: "center",
    },
    textNoTodo: {
        fontSize: 16,
        color: "#CA0049",
    },
    textSmallNoTodo: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#CA0049",
        marginRight: 10,
    },
});

// rnfs
