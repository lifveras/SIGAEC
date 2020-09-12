module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3030",
        //changeOrigin: true,
        logLevel: "debug",
        //pathRewrite: { "^/api": "/" },
        //pathRewrite: { "^/api/": "/api/" },
      },
    },
  },
};

// module.exports = {
//   devServer: {
//     proxy: {
//       "^/api": {
//         target: "http://localhost:3000",
//         ws: true,
//         changeOrigin: true,
//       },
//     },
//   },
// };
