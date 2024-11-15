import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ComponentShowcase from "@/util-component/ComponentShowcase";
import { Icon } from "react-native-elements";
import IconButton from "@/components/IconButton";
import { AntDesign } from "@expo/vector-icons";

const IconButtonIndex = () => {
  return (
    <View style={styles.container}>
      <ComponentShowcase title="Rounded Icon with Badge">
        <IconButton
          icon={<AntDesign name="stepforward" size={24} color="black" />}
          filled={true}
          badge={233}
          showBadge={true}
          size={52}
          badgeSize={32}
        />
      </ComponentShowcase>

      <ComponentShowcase title="Only Dot Badge">
        <IconButton
          icon={<AntDesign name="stepforward" size={24} color="black" />}
          filled={true}
          // badge={233}
          showBadge={true}
          size={32}
          badgeSize={18}
        />
      </ComponentShowcase>

      <ComponentShowcase title="Without Rounded Icon with Badge">
        <IconButton
          icon={<AntDesign name="rightcircleo" size={42} color="black" />}
          filled={false}
          badge={233}
          showBadge={false}
          size={42}
          badgeSize={32}
        />
      </ComponentShowcase>
    </View>
  );
};

export default IconButtonIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
