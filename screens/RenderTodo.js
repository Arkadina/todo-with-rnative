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
// import { generateId } from "../utils/generateId";

export default function RenderTodo() {
    const data = useSelector((state) => state.todoReducer);
    const navigation = useNavigation();
    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
    ];
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
                    <View>
                        {/* {data.todosLength == 0 ? (
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
                            </View> */}
                        <Text>1</Text>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => (
                                <Item title={item.title} />
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const Item = ({ title }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>{title}</Text>
    </View>
);

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
    todoContainer: {
        backgroundColor: "#E11F65",
        width: "100%",
        marginTop: 10,
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
    },
    todoText: {
        color: "#FFF",
    },
});
