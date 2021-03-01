const { resolve } = require('path')

const cwd = process.cwd()

module.exports = {
  configWebpack({ config }) {
    config.resolve.alias
      .merge({
        api: resolve(cwd, 'src/api'),
        cpn: resolve(cwd, 'src/components'),
        service: resolve(cwd, 'src/services'),
        state: resolve(cwd, 'src/state'),
      })
      .end();
  },
};
