import React from "react";
import { StyleSheet } from "react-native";
import { Button, Dialog, Paragraph } from "react-native-paper";

const GeneralModal = (props) => {
  const [visible, setVisible] = React.useState(true);

  const showDialog = () => setVisible(true);

  const hideDialog = () => {
    setVisible(false);
    props.DialogCloser(true);
  };
  return (
    <Dialog
      style={{
        backgroundColor: "#4172D7",
      }}
      visible={visible}
      onDismiss={hideDialog}
    >
      <Dialog.Title>Alert</Dialog.Title>
      <Dialog.Content>
        <Paragraph>This is simple dialog</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={hideDialog}>Done</Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default GeneralModal;

const styles = StyleSheet.create({});
