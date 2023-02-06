import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import AddTodo from "./screens/AddTodo";

import Home from "./screens/Home";
import RenderTodo from "./screens/RenderTodo";
import store from "./store";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="AddTodo" component={AddTodo} />
                    <Stack.Screen name="RenderTodo" component={RenderTodo} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
