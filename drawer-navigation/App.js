import "react-native-gesture-handler";
import { View, Text, Image, Platform, StatusBar } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "./assets/user.png";
import Profile from "./screens/Profile";
import SendMoney from "./screens/SendMoney";
import Home from "./screens/Home";
import RateApp from "./screens/RateApp";
import SignOut from "./screens/SignOut";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  <Image
                    source={User}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >Anthony De Quak</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#111"
                    }}
                  >Taga Kain ng Saging</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerIcon: () => (
              <MaterialCommunityIcons name="face-man-profile" size={20} color="#808080" />
            )
          }}
          component={Profile}
        />
         <Drawer.Screen
          name="SendMoney"
          options={{
            drawerLabel: "SendMoney",
            title: "SendMoney",
            drawerIcon: () => (
              <MaterialIcons name="send" size={20} color="#808080" />
            )
          }}
          component={SendMoney}
        />
         <Drawer.Screen
          name="RateApp"
          options={{
            drawerLabel: "RateApp",
            title: "RateApp",
            drawerIcon: () => (
              <MaterialIcons name="star-rate" size={20} color="#808080" />
            )
          }}
          component={RateApp}
        />
        <Drawer.Screen
          name="SignOut"
          options={{
            drawerLabel: "SignOut",
            title: "SignOut",
            drawerIcon: () => (
              <MaterialIcons name="logout" size={20} color="#808080" />
            )
          }}
          component={SignOut}
        />
       
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
