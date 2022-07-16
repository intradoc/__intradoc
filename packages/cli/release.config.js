module.exports = {
  extends: 'semantic-release-monorepo',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    ['@semantic-release/exec', {
      prepareCmd: 'npm run build',
    }],
    ['@semantic-release/git', {
      assets: [
        'CHANGELOG*',
      ],
    }],
    ['@semantic-release/npm', {
      pkgRoot: '.dist',
    }],
  ],
}
