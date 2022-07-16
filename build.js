'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

// Text + chalk definitions
const data = {
  name: chalk.white('           Johnie Hjelm'),
  handle: chalk.white('johnie'),
  shorthandle: chalk.white('johnie'),
  work: chalk.white('Technical Lead at Bambuser'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('johniehjelm'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~johnie'),
  github: chalk.gray('https://github.com/') + chalk.green('johnie'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('johniehjelm'),
  web: chalk.cyan('https://johnie.se'),
  bio: chalk.magenta('https://jh.gy'),
  npx: chalk.red('npx') + ' ' + chalk.white('johnie'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelBio: chalk.white.bold('     Bio:'),
  labelCard: chalk.white.bold('    Card:')
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const bio = `${data.labelBio}  ${data.bio}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  bio +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options))
);
