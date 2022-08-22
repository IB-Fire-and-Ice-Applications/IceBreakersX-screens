import { BackHandler, StyleSheet, View } from "react-native";
import metrics from "../../theme/metrics";
import AddPayAcct from "./AddPayAcct";
import PayAcctList from "./PayAcctList";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import EditPayAcct from "./EditPayAcct";

const PaymentOptContent = (props) => {
  const [PageView, setPageView] = useState(0);
  const [AcctType, setAcctType] = useState(0);
  const [AcctId, setAcctId] = useState(0);
  const [SnapPointer, setSnapPointer] = useState(["45%", "60%"]);
  const [DisableHndler, setDisableHndler] = useState(false);
  const [BottomRad, setBottomRad] = useState(10);
  const sheetRef = useRef(null);
  const AddNewPayAcct = (accType) => {
    setAcctType(accType);
    setSnapPointer(["100%"]);
    setDisableHndler(true);
    setBottomRad(0);
    setPageView(1);
  };

  const BackToList = (_statusType) => {
    setAcctType(0);
    setPageView(0);
    setSnapPointer(["40%", "60%"]);
    setDisableHndler(false);
    setBottomRad(10);
  };

  const EditStoredPayAcct = (accType, acctID) => {
    setAcctType(accType);
    setAcctId(acctID);
    setSnapPointer(["100%"]);
    setDisableHndler(true);
    setBottomRad(0);
    setPageView(2);
  };

  useEffect(() => {
    const backAction = () => {
      if (AcctType == 0) {
        sheetRef.current.close();
        return true;
      }
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 7,
          flex: 1,
          height: metrics.screenHeight,
          alignItems: "center",
          width: metrics.screenWidth,
          backgroundColor: "rgba(0,0,0,.6)",
        }}
      >
        <BottomSheet
          enablePanDownToClose={true}
          ref={sheetRef}
          onClose={() => props.setDialogCloserx(true)}
          snapPoints={SnapPointer}
          style={{
            marginHorizontal: 0,
            overflow: "hidden",
          }}
          handleComponent={() => (
            <View
              className={`${DisableHndler && "hidden"}`}
              style={styles.closeLineContainer}
            >
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
                  borderRadius: BottomRad,
                },
                styles.contentContainer,
              ]}
            />
          )}
        >
          <BottomSheetView>
            {PageView === 0 && (
              <PayAcctList
                AcctType={props.AcctType}
                DialogTitle={props.DialogTitle}
                AddNewPayAcct={AddNewPayAcct}
                EditStoredPayAcct={EditStoredPayAcct}
              />
            )}
            {PageView === 1 && (
              <AddPayAcct BackToList={BackToList} AcctType={AcctType} />
            )}

            {PageView === 2 && (
              <EditPayAcct
                BackToList={BackToList}
                AcctType={AcctType}
                AcctId={AcctId}
              />
            )}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </>
  );
};

export default PaymentOptContent;

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
