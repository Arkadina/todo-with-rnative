import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Pressable,
    TextInput,
    Keyboard,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Button from "../components/Buttons";

export default function AddTodo() {
    console.log(Keyboard);
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
                    <View>
                        <Button />

                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Todo</Text>
                            <TextInput
                                style={styles.textInput}
                                multiline
                                numberOfLines={4}
                                maxLength={100}
                            />
                        </View>
                    </View>

                    <Pressable style={styles.buttonConfirm}>
                        <Text style={styles.buttonConfirmText}>Confirm</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: "space-between",
        position: "relative",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 50,
        top: -50,
        padding: 20,
        elevation: 10,
    },
    content: {
        flex: 0,
    },
    buttonConfirm: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 48,
        backgroundColor: "#E11F65",
        borderRadius: 4,
        elevation: 5,
    },
    buttonConfirmText: {
        fontWeight: "bold",
        color: "#FFF",
    },
    inputContainer: {
        width: "100%",
    },
    text: {
        fontWeight: "bold",
        color: "#E11F65",
        alignSelf: "flex-start",
        marginBottom: 10,
    },
    textInput: {
        backgroundColor: "#E11F65",
        borderRadius: 4,
        color: "#FFF",
        padding: 10,
        maxHeight: 400,
    },
});
