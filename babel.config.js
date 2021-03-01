module.exports = {
  plugins: [
    'import-graphql',
    'graphql-tag',
    ['import', {
      'libraryName': 'lodash',
      'libraryDirectory': '',
      'camel2DashComponentName': false,
    }, 'lodash'],
    ['import', {
      'libraryName': 'date-fns',
      'libraryDirectory': '',
      'camel2DashComponentName': false,
    }, 'date-fns']
  ]
}
