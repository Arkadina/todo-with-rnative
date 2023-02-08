import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Pressable,
    FlatList,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Button from "../components/Buttons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import moment from "moment/moment";
import { Item } from "../components/Item";
// import { generateId } from "../utils/generateId";

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
                        },
                    ]}
                >
                    <Button />

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
                                onPress={(e) => navigation.navigate("AddTodo")}
                            >
                                <Text style={styles.textSmallNoTodo}>
                                    create now
                                </Text>
                            </Pressable>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.textTotalTodo}>
                                Total todo: {data.todosLength}
                            </Text>
                            <FlatList
                                data={data.todos}
                                renderItem={({ item }) => (
                                    <Item
                                        todo={item.todo}
                                        id={item.id}
                                        time={item.time}
                                    />
                                )}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    )}
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
    textTotalTodo: {
        color: "#707070",
        fontStyle: "italic",
        marginBottom: 5,
    },
});
