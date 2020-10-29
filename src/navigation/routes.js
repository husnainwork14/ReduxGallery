import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../container/HomeScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={HomeScreen} />
    </Stack.Navigator>
  );
}