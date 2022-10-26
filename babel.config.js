module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [['react-native-reanimated/plugin'],["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": true,
      "allowUndefined": true
    }]]
  };
};

// expo 프로젝트 초기 생성시 에러 발생. 이 babel.config설정을 복붙해서 저장해줘야 에러가 멈춤ㄴ