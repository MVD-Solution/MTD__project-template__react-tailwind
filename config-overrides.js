const { aliasWebpack, aliasJest } = require('react-app-alias');

const aliasMap = {
  '@components': 'src/components',
  '@constants': 'src/constants',
  '@hooks': 'src/hooks',
  '@locale': 'src/locale',
  '@pages': 'src/pages/',
  '@services': 'src/services',
  '@store': 'src/store',
  '@custom-types': 'src/custom-types',
  '@utils': 'src/utils',
  '@root': 'src'
};

const options = { alias: aliasMap };

module.exports = aliasWebpack(options);
module.exports.jest = aliasJest(options);
