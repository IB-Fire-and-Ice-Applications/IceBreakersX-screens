import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const GeneralDialog = (props) => {
  const sheetRef = useRef(null);
  const [IsOpen, setIsOpen] = useState(true);

  const snapPoints = useMemo(() => ["35%", "45%"], []);

  return (
    <BottomSheet
      enablePanDownToClose={true}
      ref={sheetRef}
      onClose={() => props.DialogCloser(true)}
      isBackDrop={true}
      snapPoints={snapPoints}
      detached={props.Detacher}
      bottomInset={props.BottomInset}
      style={{
        marginHorizontal: props.HorizontalMargin,
        overflow: "hidden",
      }}
      handleComponent={() => (
        <View style={styles.closeLineContainer}>
          <View style={styles.closeLine}></View>
        </View>
      )}
      backgroundComponent={() => (
        <LinearGradient
          colors={["#41377E", "#2556B7"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            {
              alignItems: "center",
              flex: 1,
              borderRadius: 10,
            },
            styles.contentContainer,
          ]}
        />
      )}
    >
      <BottomSheetScrollView>{props.children}</BottomSheetScrollView>
    </BottomSheet>
  );
};

export default GeneralDialog;

const styles = StyleSheet.create({
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: "#426ACC",
  },
  closeLineContainer: {
    alignSelf: "center",
  },
  closeLine: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,.2)",
    marginTop: 9,
  },
});
