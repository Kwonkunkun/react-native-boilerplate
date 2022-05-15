# 🍺 Project Structure

## File structure

`index.js` is the entry-point for our file, and is mandatory.
`App.tsx` is the main-point for our application.

- `/android` - contains native code specific to the Android OS
- `/ios` - native code specific to iOS
- `/docs` - as the name suggests - any docs
- `/src` - contains our JS and style code.
  - `/screens` - contains all screens/pages
  - `/hooks` - shared hooks
  - `/types` - shared types
  - `/services` - app-wide services
    - `/api` - generic network handling with API constants
    - `/event-emitter` - singleton event bus to use it everywhere in the project
    - `/models` - generic models should lay here
    - `/navigation` - navigation system lay here
  - `/shared` - whole app-wide shared
    - `/components` - app-wide shared components
    - `/constants` - app-wide shared constant variables
    - `/localization` - app-wide localization
    - `/theme` - app-wide theme which contains `color palette` and `fonts`
  - `/utils` - generic util functions
  - `index.js` - the starting place for our app
  - `App.tsx` - the main place for our app

## Project Structure on Flat Design

```
...
├─ android
├─ ios
├─ src
│  ├─ assets
│  │  ├─ fonts
│  │  └─ splash
│  ├─ hooks
│  │  ├─ index.ts
│  │  ├─ useCustomNavigation.ts
│  │  └─ useStatusBar.ts
│  ├─ navigation
│  │  └─ index.tsx
│  ├─ screens
│  │  ├─ Detail
│  │  │  └─ index.tsx
│  │  ├─ Home
│  │  │  ├─ index.tsx
│  │  │  └─ mock
│  │  │     └─ MockData.ts
│  │  ├─ Notification
│  │  │  └─ index.tsx
│  │  ├─ Profile
│  │  │  └─ index.tsx
│  │  └─ Search
│  │     └─ index.tsx
│  ├─ services
│  │  ├─ api
│  │  │  ├─ api.constant.ts
│  │  │  └─ index.ts
│  │  ├─ event-emitter
│  │  │  └─ index.ts
│  │  └─ models
│  │     └─ index.ts
│  ├─ shared
│  │  ├─ components
│  │  │  ├─ HeaderBlock
│  │  │  │  └─ index.tsx
│  │  │  ├─ Margin
│  │  │  │  └─ index.tsx
│  │  │  └─ StyledText
│  │  │     └─ index.tsx
│  │  ├─ constants
│  │  │  └─ index.ts
│  │  ├─ localization
│  │  │  └─ index.ts
│  │  └─ theme
│  │     ├─ colors.ts
│  │     ├─ font-size.ts
│  │     ├─ fonts.ts
│  │     └─ themes.ts
│  ├─ types
│  │  └─ navigation.d.ts
│  └─ utils
│     └─ index.ts
└─ tsconfig.json

```
