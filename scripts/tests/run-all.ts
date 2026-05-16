#!/usr/bin/env bun
/**
 * 统一测试执行器
 * 自动发现 scripts/tests/ 下所有 .ts 文件（排除自身）并依次执行
 * 用法: bun run scripts/tests/run-all.ts
 */
import { spawnSync } from 'child_process'
import { readdirSync } from 'fs'
import { join, relative } from 'path'

const __dirname = import.meta.dir
const testDir = __dirname
const selfFile = 'run-all.ts'

const files = readdirSync(testDir)
  .filter(f => f.endsWith('.ts') && f !== selfFile)
  .sort()

if (files.length === 0) {
  console.log('没有找到测试文件')
  process.exit(0)
}

console.log(`发现 ${files.length} 个测试文件:\n`)

let totalPassed = 0
let totalFailed = 0
let exitCode = 0

for (const file of files) {
  const filePath = join(testDir, file)
  console.log(`━━━ ${file} ━━━`)

  const result = spawnSync('bun', ['run', filePath], {
    cwd: join(__dirname, '..', '..'),
    stdio: 'inherit',
    encoding: 'utf8',
    timeout: 30000,
    env: { ...process.env, NODE_ENV: 'test' },
  })

  if (result.status === 0) {
    console.log(`\n✅ ${file} 通过\n`)
    totalPassed++
  } else {
    console.log(`\n❌ ${file} 失败 (exit code: ${result.status})\n`)
    totalFailed++
    exitCode = 1
  }
}

const total = totalPassed + totalFailed
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
console.log(`总计: ${total}  |  通过: ${totalPassed}  |  失败: ${totalFailed}`)
process.exit(exitCode)
