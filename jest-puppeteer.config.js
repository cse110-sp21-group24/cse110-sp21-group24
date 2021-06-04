/*module.exports = {
  launch: {
    headless: false,
    slowMo: 500
   }
}*/
module.exports = {
  launch: {},
  server: {
    command: "npm run serve",
    port: 5500,
    launchTimeout: 180000
  }
};