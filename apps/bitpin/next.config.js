// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nx/next/plugins/with-nx')
const UnoCSS = require('@unocss/webpack').default

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  webpack: (config) => {
    config.plugins.push(UnoCSS({
      configFile: '../../libs/design-system/src/lib/uno.config.ts',
    }))
    config.cache = false
    // config.optimization.realContentHash = true

    return config
  }
}

module.exports = withNx(nextConfig)
