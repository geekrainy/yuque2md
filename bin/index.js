#!/usr/bin/env node
const program = require('commander');

const pkg = require('../package.json');
const sync = require('../commands/sync');

const { version } = pkg;

program
  .version(version,'-v, --version')

program
  .command('sync')
  .description('Sync all data')
  .action(function(cmd) {
    sync();
  });

program.on('command:*', function(){
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
    process.exit(1);
  });

program.parse(process.argv);
