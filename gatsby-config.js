const year = new Date(Date.now()).getFullYear()

module.exports = {
  siteMetadata: {
    author: "Kevin Guertin",
    title: "Comic Cavern",
    currentYear: year,
  },
  plugins: ["gatsby-plugin-typescript", "gatsby-plugin-styled-components"],
}
