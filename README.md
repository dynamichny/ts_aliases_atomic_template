# React Native Template (typescript, aliases, atomic structure)

## Init new project

```
npx react-native init ProjectName --template https://github.com/dynamichny/ts_aliases_atomic_template.git

```

## Files structure inside src

```
├── src
│   ├── assets
│   │  ├── fonts
│   │  ├── images
│   ├── components
│   │  ├── atoms
│   │  ├── molecules
│   │  ├── organisms
│   ├── navigations
│   ├── scenes
│   ├── styles
│   ├── utils
│   ├── App.tsx
```

## Aliases

In every key directory there is index.ts file in which you should export every file. Example:
```
├── scenes
│   ├── HomeScreen
│   │  ├── HomeScreen.tsx
│   ├── index.ts
```
Then index.ts should look like this:
```ts
export { default as HomeScreen } from './HomeScreen/HomeScreen';
```

And for import you can use this wherever you are: 
```ts
import { HomeScreen } from '_scenes';
```

### Add new key directory

To add new key directory you have to change 3 files:
  - tsconfig.json
  - eslintrc.js
  - .babelrc