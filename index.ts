#!/usr/bin/env node
import inquirer from 'inquirer'
import initCli from './src/cli'
import { answerType } from './src/interface'

const promptList = [
  {
    type: 'list',
    name: 'choice',
    message: '选择要安装的框架(默认react+typescript)',
    default: 0,
    choices: [
      { value: 'react+typescript', name: 'react+typescript' },
      { value: 'react', name: 'react' },
      { value: 'vue3+typescript', name: 'vue3+typescript' },
      { value: 'vue3', name: 'vue3' },
      { value: 'vue2', name: 'vue2' },
    ],
  },
  {
    type: 'checkbox',
    message: '选择要安装的插件(默认全选)',
    name: 'plugins',
    choices: [
      {
        name: 'eslint注册',
        value: 'eslint',
        checked: true,
      },
      {
        name: 'husky注册',
        value: 'husky',
        checked: true,
      },
      {
        name: 'commitLint注册',
        value: 'commitLint',
        checked: true,
      },
      {
        name: 'vscode格式化注册',
        value: 'vscode',
        checked: true,
      },
    ],
  },
]

const question = async () => {
  // 运行时请使用 npm run serve, 避免使用nodemon，会导致arrow key press 无效： https://github.com/SBoudrias/Inquirer.js/issues/844#issuecomment-571412210
  const answers: answerType = await inquirer.prompt(promptList)
  initCli(answers)
}

question()
