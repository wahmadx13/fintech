import { Ionicons } from "@expo/vector-icons";
import RoundButton from "./RoundButton";
import React, { useState } from "react";

import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Menu, MenuItem } from "react-native-material-menu";

const Dropdown = () => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <Menu
      visible={visible}
      anchor={
        <RoundButton
          icon={"ellipsis-horizontal"}
          text={"More"}
          onPress={showMenu}
        />
      }
      onRequestClose={hideMenu}
    >
      <MenuItem onPress={hideMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="list" size={24} />
          <Text>Statement </Text>
        </TouchableOpacity>
      </MenuItem>
      <MenuItem onPress={hideMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="arrow-undo-circle-outline" size={24} />
          <Text>Converter </Text>
        </TouchableOpacity>
      </MenuItem>
      <MenuItem onPress={hideMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="image" size={24} />
          <Text>Background </Text>
        </TouchableOpacity>
      </MenuItem>
      <MenuItem onPress={hideMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="add-circle-outline" size={24} />
          <Text>Add a new account </Text>
        </TouchableOpacity>
      </MenuItem>
    </Menu>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
export default Dropdown;
