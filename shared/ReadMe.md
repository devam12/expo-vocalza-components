# Expo Vocalza Components

A library of reusable, customizable components for React Native projects built with Expo. These components are designed to streamline development and ensure consistency across your applications.

---

## Components

The following components are included in the library:

- **Button**: A customizable button with support for different styles and actions.
- **Chip**: A small, interactive element used for actions or display purposes.
- **IconButton**: A button with an icon for compact user interactions.
- **OTPInput**: A component for entering OTP (One-Time Password) values with validations.
- **Input**: A customizable text input field for user data entry.

---

## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Recommended version 14 or above.
- **Expo CLI**: To run and build Expo projects.
- **React Native Development Environment**: Properly set up for your platform (iOS/Android).

---

### Installing

You can install the library using **Yarn** or **npm**.

#### Run the following command to install the library:

##### Using Yarn

yarn add vocalza-components

##### Using NPM

npm install vocalza-components

---

### Used

```base

import React from 'react';
import { View } from 'react-native';
import { Button, Chip, IconButton, OTPInput, Input } from 'vocalza-components';

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      {/* Button Component */}
      <Button onClick={() => alert('Button clicked')} label="Click Me" />

      {/* Chip Component */}
      <Chip text="Example Chip" />

      {/* IconButton Component */}
      <IconButton icon="heart" onClick={() => alert('Icon clicked')} />

      {/* OTPInput Component */}
      <OTPInput length={6} onChange={(otp) => console.log(otp)} />

      {/* Input Component */}
      <Input placeholder="Enter text here" onChangeText={(text) => console.log(text)} />
    </View>
  );
}
```



