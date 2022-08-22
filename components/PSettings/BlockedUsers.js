import React from "react";
import { StyleSheet, View } from "react-native";

const BlockedUsers = ({ navigation: { goBack } }) => {
  const [HeaderBack, setHeaderBack] = useState(false);

  useEffect(() => {
    if (HeaderBack) {
      goBack();
    }
  }, [HeaderBack]);
  return (
    <LinearGradient
      colors={["#400A3A", "#4285F4"]}
      location={[0.8, 98.4]}
      useAngle={true}
      angle={171.68}
      style={{
        height: metrics.screenHeight,
        alignItems: "center",
        flex: 1,
      }}
    >
      <SafeAreaView
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <Header
          BackHeader={true}
          BackNavigator={setHeaderBack}
          title="Notifications"
        />

        <ScrollView
          style={{
            paddingTop: 0,
            paddingHorizontal: 10,
            flex: 1,
          }}
        >
          <View
            style={{
              paddingBottom: 20,
            }}
          ></View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BlockedUsers;

const styles = StyleSheet.create({});
