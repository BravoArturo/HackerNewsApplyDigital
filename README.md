# HackerNews (React Native)

## Installation

1. Install JavaScript dependencies:

```bash
yarn install
```

2. Install iOS Pods:

```bash
cd ios
pod install
cd ..
```

---

## Running the App

### iOS (physical device)

Run on a specific connected iPhone:

```bash
npx react-native run-ios --device "Device Name"
```

Example:

```bash
npx react-native run-ios --device "Arturo iPhone"
```

### Android

Run on an connected device:

```bash
npx react-native run-android
```

---

## Running Unit Tests

This project uses Jest + @testing-library/react-native.

### Run all tests

```bash
yarn test
```

### Run only the two tests created during the setup

Screen/component test:

yarn test src/views/HackerNews/**tests**/hackerNews.test.tsx

ViewModel unit test (getHackerNews):

```bash
yarn test src/views/HackerNews/__tests__/getHackerNews.test.ts
```
