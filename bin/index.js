#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import degit from 'degit';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { version } = require('../package.json');

const program = new Command();

const REPOS = {
  admin: 'https://github.com/kyrie668/kyrie-admin.git',
  'visualization-screen': 'https://github.com/kyrie668/visualization-screen.git',
  'official-website': 'https://github.com/kyrie668/kyrie-official-website.git',
};

async function createProject(projectName) {
  const projectDir = path.resolve(process.cwd(), projectName);

  // 检查目录是否存在
  if (fs.existsSync(projectDir)) {
    const { overwrite } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: ` ${chalk.red(projectName)} already exists. Do you want to overwrite it?`,
        default: false,
      },
    ]);

    if (!overwrite) {
      console.log(chalk.red('❌ cancelled.'));
      process.exit(1);
    } else {
      fs.removeSync(projectDir);
      console.log(chalk.yellow('⚠️  deleting existing directory...'));
    }
  }

  // 选择模块
  const { moduleChoice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'moduleChoice',
      message: 'Please select a module to create your project',
      choices: Object.keys(REPOS),
    },
  ]);

  // 克隆 GitHub 仓库
  console.log(chalk.blue(`🚀 cloning ${moduleChoice} repository...`));
  const emitter = degit(REPOS[moduleChoice], { cache: false, force: true });
  try {
    await emitter.clone(projectDir);

    // 删除 `.git` 解绑 Git 记录
    fs.removeSync(path.join(projectDir, '.git'));
    // 提示下一步操作
    console.log(chalk.cyan(`\n👉 Next steps:`));
    console.log(`   cd ${projectName}`);
    console.log('   npm install');
    console.log('   npm run dev');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

program
  .version(version)
  .argument('<project-name>', 'Directory to create your new project')
  .action((projectName) => {
    createProject(projectName);
  });

program.parse(process.argv);
