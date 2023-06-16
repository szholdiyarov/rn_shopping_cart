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
        },
      },
    ],
    ['babel-plugin-styled-components'],
  ],
};
