# AccessMap UW Native

This is the repo for the AccessMap UW native mobile application, backing applications
on the Android and iOS app stores.

## Running in development

- Set up a config.js (you can copy config.js.example to config.js and edit) with your
Mapbox access token and routing URL endpoint (the full URL - ending in route.json,
typically).

- Run `npm run start` to get the JS build server running (separate terminal)

- Run `react-native run-android` to run on an android simulator or device. Note that
the simulator/device must be running prior to this command.

## Building for production

In all cases, make sure to update the release version - at least incrementing the
internal version number. This is not yet centralized and must be done for both iOS and
Android separately.

### Android

- Change directories to `android/app`

- Run `./gradlew assembleRelease`

## License

This project is currently dual-licensed under the open source MIT and Apache 2.0
licenses.
