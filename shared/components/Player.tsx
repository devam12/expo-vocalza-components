import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { usePlayerEvent } from "../hooks/usePlayerEvent";
import {
  Waveform,
  type IWaveformRef,
} from "@simform_solutions/react-native-audio-waveform";

interface Recording {
  name: string;
  uri: string;
  duration: string;
}
interface PlayerProps {
  recordings: Recording[];
}

export const RecordingCard = ({ item }: { item: Recording }) => {
  const { playAudio, pauseAudio, playing, progress } = usePlayerEvent();

  const { name, uri, duration } = item;
  const ref = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    playAudio: () => playAudio(uri),
    pauseAudio,
  }));

  const path = item?.uri;

  return (
    <TouchableOpacity style={{ marginBottom: 12 }}>
      <Text key={item.uri} style={{ marginBottom: 12 }}>
        {item.name} - {item.duration}
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
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
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* <View
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
            </View> */}
          <Waveform
            mode="static"
            ref={ref}
            path={path}
            candleSpace={2}
            candleWidth={5}
            candleHeightScale={5}
            containerStyle={{ borderRadius: 8, backgroundColor: "#fefefe" }}
            waveColor={"gray"}
            onPlayerStateChange={(playerState) => console.log(playerState)}
            onPanStateChange={(isMoving) => console.log(isMoving)}
            scrubColor={"red"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Player = ({ recordings }: PlayerProps) => {
  return (
    <FlatList
      data={recordings}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        console.log(item);

        return <RecordingCard item={item} />;
      }}
    />
  );
};

export default Player;
