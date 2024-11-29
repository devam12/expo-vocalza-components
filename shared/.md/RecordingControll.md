- Record and Audio to access microphone functionality
    1) Add this into Info.plist file
    -   <key>NSMicrophoneUsageDescription</key>
        <string>This app requires access to the microphone to record audio.</string>
    2) Record audio 
    -   ["expo-av",{"microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone."}]


Run Command get updated library
- pod install 