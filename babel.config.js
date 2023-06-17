module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ts', '.tsx', '.png'],
        alias: {
          screens: './src/screens',
          components: './src/components',
          state: './src/state',
          assets: './src/assets',
        },
      },
    ],
    ['babel-plugin-styled-components'],
  ],
};
