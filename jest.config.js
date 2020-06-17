// jest.config.js
module.exports = {
  // [...]
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleDirectories: ['node_modules', 'src']
}
