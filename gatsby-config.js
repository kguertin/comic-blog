const year = new Date(Date.now()).getFullYear()

module.exports = {
  siteMetadata: {
    author: "Kevin Guertin",
    title: "Comic Cavern",
    curretYear: year,
  },
  plugins: ["gatsby-plugin-typescript"],
}
