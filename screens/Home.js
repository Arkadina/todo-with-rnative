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
import AntDesign from "@expo/vector-icons/AntDesign";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Item } from "../components/Item";

export default function Home() {
    const data = useSelector((state) => state.todoReducer);
    const navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Header />
                    <View
                        style={[
                            styles.container,
                            {
                                height: Dimensions.get("window").height - 120,
                                flex: 0,
                                alignItems: "center",
                                justifyContent: "center",
                            },
                        ]}
                    >
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
                                    <AntDesign
                                        name="appstore1"
                                        size={12}
                                        color="#CA0049"
                                    />
                                </Pressable>
                            </View>
                        ) : (
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
                        )}
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        elevation: 10,
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
