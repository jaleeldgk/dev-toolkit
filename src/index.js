const { getSnippet, listSnippets } = require('./snippets');
const { currentBranch, lastCommit } = require('./git-helpers');
const { testEndpoint, healthCheck } = require('./api-tester');
const { scaffold } = require('./scaffold');

module.exports = {
  getSnippet, listSnippets,
  currentBranch, lastCommit,
  testEndpoint, healthCheck,
  scaffold
};

if (require.main === module) {
  console.log('Dev Toolkit v1.0.0');
  console.log('Available snippets:', listSnippets().join(', '));
}
