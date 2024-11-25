import React, { useState } from "react";
import Header from "@/util-component/Header";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import ComponentShowcase from "@/util-component/ComponentShowcase";

const SearchBarIndex = () => {
  const [search, setSearch] = useState("");

  const handleTextChange = (text: string): any => {
    setSearch(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Search Bar Components" />

      <ComponentShowcase title="Serach Bar Input">
        {/* <SearchBar
          placeholder="Type Here..."
          value={search}
          onChangeText={(text: string) => {
            setSearch(text);
          }}
          platform={Platform.OS === "ios" ? "ios" : "android"}
          showLoading={false}
          loadingProps={{}} // Default loading props
          lightTheme={true}
          round={true}
          onClear={() => setSearch("")}
          onCancel={() => console.log("Cancelled")}
          onFocus={() => console.log("Focused")}
          onBlur={() => console.log("Blurred")}
          cancelButtonTitle="Cancel" // Required for iOS platform
          cancelButtonProps={{}} // Default cancel button props
          searchIcon={{ name: "search" }} // Customize search icon
          clearIcon={{ name: "close" }} // Customize clear icon
          showCancel={Platform.OS === "ios"} // Show cancel button for iOS
        /> */}
        <></>
      </ComponentShowcase>
    </SafeAreaView>
  );
};

export default SearchBarIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
});
