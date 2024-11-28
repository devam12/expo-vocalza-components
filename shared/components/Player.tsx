import React, { forwardRef, useImperativeHandle } from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { usePlayerEvent } from "../hooks/usePlayerEvent";

export const Player = forwardRef(
  ({ uri }: { uri: string }, ref: React.Ref<any>) => {
    const { playAudio, pauseAudio, playing, progress } = usePlayerEvent();

    useImperativeHandle(ref, () => ({
      playAudio: () => playAudio(uri),
      pauseAudio,
    }));

    return (
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
    );
  }
);
