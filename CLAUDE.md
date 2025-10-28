# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Expo React Native application using:
- Expo SDK ~54.0.20
- React Native 0.81.5
- React 19.1.0
- Expo Router for file-based routing
- TypeScript with strict mode enabled
- React Native Reanimated for animations
- React Native New Architecture enabled

## Development Commands

### Starting the app
```bash
npx expo start          # Start development server
npm run android         # Start on Android emulator
npm run ios            # Start on iOS simulator
npm run web            # Start web version
```

### Other commands
```bash
npm install            # Install dependencies
npm run lint           # Run ESLint
npm run reset-project  # Reset to blank project (moves starter to app-example)
```

## Architecture

### File-based routing with Expo Router

The app uses Expo Router's file-based routing system. Route structure:
- `app/_layout.tsx` - Root layout with Stack navigator and theme provider
- `app/(tabs)/_layout.tsx` - Tab navigator with Home and Explore tabs
- `app/(tabs)/index.tsx` - Home screen
- `app/(tabs)/explore.tsx` - Explore screen
- `app/modal.tsx` - Modal screen (presented as modal)

The root layout defines `unstable_settings.anchor: '(tabs)'` to set the initial route.

### Theming system

The app supports light/dark mode:
- `hooks/use-color-scheme.ts` - Color scheme detection hook (with `.web.ts` variant)
- `hooks/use-theme-color.ts` - Hook for accessing theme colors
- `constants/theme.ts` - Theme color definitions
- Theme provider wraps the app in `app/_layout.tsx` using React Navigation's themes

### Component organization

- `components/` - Shared components (themed-view, themed-text, parallax-scroll-view, etc.)
- `components/ui/` - UI primitives (icon-symbol, collapsible)
- Platform-specific implementations use `.ios.tsx` or `.web.tsx` extensions
- Path alias `@/*` resolves to project root (configured in tsconfig.json)

### Key features

- TypeScript strict mode enabled
- Typed routes enabled via `experiments.typedRoutes`
- React Compiler enabled via `experiments.reactCompiler`
- Edge-to-edge display on Android
- SF Symbols on iOS via `IconSymbol` component
- Haptic feedback on tab presses via `HapticTab` component

## Platform-specific code

Use platform extensions for platform-specific implementations:
- `.ios.tsx` for iOS-specific code
- `.android.tsx` for Android-specific code
- `.web.tsx` for web-specific code
- `.native.tsx` for native (iOS/Android) but not web

## Important paths

- `assets/images/` - Image assets (icons, splash screens)
- `scripts/` - Build and utility scripts
- `.expo/` - Expo generated files (gitignored)
