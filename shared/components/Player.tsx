import React, { forwardRef, useImperativeHandle } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { usePlayerEvent } from "../hooks/usePlayerEvent";

interface PlayerProps {
  item: {
    name: string;
    uri: string;
    duration: string;
  };
}

export const Player = forwardRef(
  ({ item }: PlayerProps, ref: React.Ref<any>) => {
    const { playAudio, pauseAudio, playing, progress } = usePlayerEvent();

    const { name, uri, duration } = item;

    useImperativeHandle(ref, () => ({
      playAudio: () => playAudio(uri),
      pauseAudio,
    }));

    return (
      <TouchableOpacity style={{ marginBottom: 12 }}>
        <Text key={item.uri} style={{ marginBottom: 12 }}>
          {item.name} - {item.duration}
        </Text>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginBottom: 12,
            paddingHorizontal: 10,
          }}
        >
          {playing ? (
            <AntDesign
              name="pause"
              size={36}
              color="black"
              style={{ marginRight: 10 }}
              onPress={pauseAudio}
            />
          ) : (
            <AntDesign
              name="play"
              size={36}
              color="black"
              style={{ marginRight: 10 }}
              onPress={() => playAudio(uri)}
            />
          )}
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View
              style={{
                height: 10,
                width: "100%",
                backgroundColor: "rgba(00,00,150, 0.2)",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: `${(progress || 0) * 100}%`,
                  backgroundColor: "rgba(00,00,255,0.5)",
                }}
              ></View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
);
