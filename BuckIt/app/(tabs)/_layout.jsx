import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <>
    <Tabs>
    <Tabs.Screen name="home" options={{ title: "Home",headerShown: false,}}/>
    <Tabs.Screen name="calendar" options={{ title: "Calendar", headerShown: false,}}/>
    <Tabs.Screen name="create" options={{ title: "Create", headerShown: false,}}/>
    <Tabs.Screen name="explore" options={{ title: "Explore", headerShown: false,}}/>
    <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false,}}/>
    </Tabs>
    </>
  )
}

export default TabsLayout