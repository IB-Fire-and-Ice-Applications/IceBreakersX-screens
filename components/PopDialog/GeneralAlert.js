import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Snackbar } from "react-native-paper";
import metrics from "../../theme/metrics";

const GeneralAlert = () => {
  const [visible, setVisible] = useState(true);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{
          backgroundColor: "#41377E",
        }}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};

export default GeneralAlert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    zIndex: 777,
    height: metrics.screenHeight,
    width: metrics.screenWidth,
  },
});
