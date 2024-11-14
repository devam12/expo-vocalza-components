// app-example/app/components/Button.tsx
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Header from "@/util-component/Header";
import ComponentShowcase from "@/util-component/ComponentShowcase";
import CustomButton from "@/components/Button";

export default function ButtonIndex() {
  return (
    <ScrollView>
      <Header title="Button Components" />
      <ComponentShowcase
        title="Full Width with left icon"
        description="Contained"
      >
        <CustomButton
          variant="contained"
          size="lg"
          fullWidth
          leftIcon={<Feather name="award" size={18} color="white" />}
          customTextColor="#fff"
          onPress={() => console.log("Button pressed!")}
          style={{ borderRadius: 8 }}
        >
          Press Me
        </CustomButton>
      </ComponentShowcase>

      <ComponentShowcase
        title="Rounder style min Width with left icon"
        description="Contained"
      >
        <CustomButton
          variant="contained"
          size="lg"
          // fullWidth
          leftIcon={<Feather name="eye-off" size={18} color="white" />}
          onPress={() => console.log("Outlined button pressed!")}
          style={{ width: "50%" }}
        >
          Hidden
        </CustomButton>
      </ComponentShowcase>

      <ComponentShowcase
        title="Full Width with left icon"
        description="Outlined"
      >
        <CustomButton
          variant="outlined"
          fullWidth
          // customBorderColor="red"
          // customTextColor="#000"
          onPress={() => console.log("Outlined button pressed!")}
          style={{ borderRadius: 8 }}
          // style={{borderRadius:8}}
        >
          Send Invitation
        </CustomButton>
      </ComponentShowcase>

      <ComponentShowcase
        title="Full Width with left icon"
        description="Outlined"
      >
        <CustomButton
          variant="outlined"
          customBorderColor="red"
          fullWidth
          // customTextColor="red"
          onPress={() => console.log("Outlined button pressed!")}
          style={{ borderRadius: 8 }}
        >
          Log out
        </CustomButton>
      </ComponentShowcase>

      <ComponentShowcase title="Full Width with left icon" description="Text">
        <CustomButton
          variant="text"
          size="lg"
          onPress={() => console.log("Text button pressed!")}
          fullWidth
          customTextColor="red"
        >
          DELETE ACCOUNT
        </CustomButton>
      </ComponentShowcase>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
