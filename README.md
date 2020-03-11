# poc-rn-bare-detox-travis-ci-mac

Initialize expo managed project

```
$ expo init poc-rn-bare-detox-travis-ci-mac
```

- Choose the `minimal` option

Start the application to make sure it works

```
$ cd poc-rn-bare-detox-travis-ci-mac
$ yarn start
```

Eject the application into a bare workflow

```
$ yarn eject
```

1. Choose the `Bare: ...` option
1. Choose a home screen name (ex: POCDetoxWithTravis)
1. Choose a name within android and xcode (ex: POCDetoxWithTravis)

Install Pods

```
$ cd ios && pod install && cd ..
```


Install Global dependencies (OSX)

```
$ brew install watchman
$ brew tap AdoptOpenJDK/openjdk
$ brew cask install adoptopenjdk8
$ npm i -g react-native-cli
$ npm i -g detox
```