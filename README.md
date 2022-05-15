# react-native-boilerplate

#### fork: https://github.com/WrathChaos/react-native-typescript-boilerplate/blob/master/README.md

- please read upper link docs, if you need know detail this template.
- this template update to my code style from [forked template](https://github.com/WrathChaos/react-native-typescript-boilerplate/blob/master).

---

### edit

#### 1. commit message convention (add gitmoji)

```
//subject
🎉 init
✨ feature
🐛 fix
👷 build
🔨 chore
💚 ci
📝 docs
💄 style
🎨 refactor
✅ test
⚡️ perf
⏪️ revert
🔖 release
➕ plus
➖ minus
```

##### example

```
🎉 init: project init
...

🐛 fix: layout error fix
...
```

#### 2. navigation

- reason: type inference for route name.
- if you need navigation, recommend useCustomNavigation hook.

```
// ./src/types/navigation.d.ts
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Detail: undefined;
};
...
export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Profile: undefined;
};
...
```

```
// ./src/navigation
const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();
```

```
// ./src/hooks/useCustomNavigation
const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
```

##### example

```
...
const Home = () => {
  const navigation = useCustomNavigation()

  const onPressDetailButton = () =>{
    navigation.navigate("Detail", {...params});
  }

  return (...)
}
...
```

#### 3. add dependencies, minus dependencies

##### plus

```
"commitlint-config-gitmoji"
"react-native-redash"
"react-native-status-bar-height"
"styled-components"
"@types/styled-components"
"@types/styled-components-react-native"
```

##### minus

```
"@freakycoder/react-native-custom-text"
"@freakycoder/react-native-helpers"
```

#### 4. add shared components

```
./src/shared/components/HeaderBlock
./src/shared/components/Margin
./src/shared/components/StyledText
```
