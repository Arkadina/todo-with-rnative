import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Button from "../components/Buttons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function RenderTodo() {
    const data = useSelector((state) => state.todoReducer);
    const navigation = useNavigation();
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
                    <Button />
                    <View>
                        {data.todosLength == 0 ? (
                            <View style={styles.containerNoText}>
                                <Text style={styles.textNoTodo}>
                                    Ops! Looks like you don't have any todo.
                                </Text>
                                <Pressable
                                    style={{
                                        flex: 0,
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                    onPress={(e) =>
                                        navigation.navigate("AddTodo")
                                    }
                                >
                                    <Text style={styles.textSmallNoTodo}>
                                        create now
                                    </Text>
                                </Pressable>
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
        position: "relative",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 50,
        top: -50,
        padding: 20,
        elevation: 10,
    },
    content: {},
    containerNoText: {
        flex: 0,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "90%",
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
