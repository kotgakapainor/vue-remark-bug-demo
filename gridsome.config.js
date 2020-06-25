// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

/* 

*/
const postRoutes = [
  {
    use: '@gridsome/vue-remark',
    options: {
      typeName: 'JournalPost', // Required
      baseDir: './data/post/journal', // Where .md files are located
      pathPrefix: '/journal', // Add route prefix. Optional
      template: './src/templates/JournalPost.vue', //the tempalate to use
    }
  }
]
const graphQlData = [
  {
    use: "@gridsome/source-filesystem",
    options: {
      path: "data/post/projects/**/*.md",
      typeName: "ProjectPost",
      resolveAbsolutePaths: true,
      remark: {
        externalLinksTarget: "_blank",
        externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      },
    },
  },
]



module.exports = {
  siteName: "Automaten.com",
  siteUrl: `https://www.automaten.com`,
  host: "0.0.0.0",
  titleTemplate: "%s",
  siteDescription: "POC of Automaten.com JAM Stack",
  plugins: [
    ...graphQlData,
    ...postRoutes
  ],
  transformers: {
    remark: {
      plugins: []
    },
  },
};

