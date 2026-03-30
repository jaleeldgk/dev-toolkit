const { execSync } = require('child_process');

function run(cmd) {
  return execSync(cmd, { encoding: 'utf8' }).trim();
}

function currentBranch() {
  return run('git rev-parse --abbrev-ref HEAD');
}

function lastCommit() {
  return run('git log -1 --pretty=format:"%h - %s (%an, %ar)"');
}

function uncommittedChanges() {
  return run('git status --porcelain').split('\n').filter(Boolean);
}

function branches() {
  return run('git branch --list').split('\n').map(b => b.trim().replace('* ', ''));
}

module.exports = { currentBranch, lastCommit, uncommittedChanges, branches };
