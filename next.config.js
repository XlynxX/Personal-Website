const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: '',
  assetPrefix: isProd ? '' : undefined,
  distDir: 'build',
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/ee/:path*',
  //       destination: '/ee/:path*',
  //       permanent: false,
  //     },
  //   ]
  // },
}
