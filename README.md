# poc-rn-bare-detox-travis-ci-mac

## Getting Started

### Initialize expo managed project

```
$ expo init poc-rn-bare-detox-travis-ci-mac
```

- Choose the `minimal` option

### Start the application to make sure it works

```
$ cd poc-rn-bare-detox-travis-ci-mac
$ yarn start
```

### Eject the application into a bare workflow

```
$ yarn eject
```

1. Choose the `Bare: ...` option
1. Choose a home screen name (ex: POCDetoxWithTravis)
1. Choose a name within android and xcode (ex: POCDetoxWithTravis)

### Install Pods

```
$ cd ios && pod install && cd ..
```

### Use npm instead of yarn

```
$ rm -rf node_modules yarn.lock
$ npm i
```

### Start the metro bundler

```
$ react-native start
```

### Run on ios to make sure it works (run inseperate terminal)

```
$ react-native run-ios
```

### Run on android to make sure it works (run inseperate terminal)

```
$ react-native run-android
```

### Update .gitignore

Add `Pods/` to .gitignore plus others that you think will need to be ignored


## Installing Detox and Global dependencies (OSX)

Run the following

```
$ brew install watchman
$ brew tap AdoptOpenJDK/openjdk
$ brew cask install adoptopenjdk8
$ npm i -g react-native-cli
$ npm i -g detox
```

Follow:
- https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md
- Use jest
- use workspace config for ios

By the end, you should have your detox failing tests running on ios debug.

Read and update to get tests to pass:
- https://github.com/wix/Detox/blob/master/docs/Introduction.WritingFirstTest.md

By the end, you should have passing tests

## Add release testing

Follow:
- https://reactnativetesting.io/ci/intro.html#release-build

## Add travisCI for ios e2e

Follow:
- https://reactnativetesting.io/ci/travis-ci.html#reference