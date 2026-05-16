/**
 * ripgrep 检测验证脚本
 * 验证项目自带的 ripgrep 检测逻辑能正确找到系统 rg
 */
import { execSync } from 'child_process'
import { existsSync } from 'fs'
import { ripgrepCommand } from '../../src/utils/ripgrep.js'

let passed = 0
let failed = 0

function assert(condition: boolean, msg: string) {
  if (condition) {
    passed++
    console.log(`  ✅ ${msg}`)
  } else {
    failed++
    console.log(`  ❌ ${msg}`)
  }
}

console.log('\n=== ripgrep 系统检测 ===')

// 验证项目内 rg 检测能找到可用的 rg
const { rgPath, rgArgs } = ripgrepCommand()
assert(!!rgPath, `找到 rg 路径: ${rgPath || '(无)'}`)
assert(rgPath !== '', 'rgPath 不为空')
assert(Array.isArray(rgArgs), 'rgArgs 是数组')
assert(existsSync(rgPath), `rg 文件存在: ${rgPath}`)

// 验证 rg 可执行
try {
  const out = execSync(`"${rgPath}" --version`, { encoding: 'utf8', timeout: 5000 })
  assert(out.startsWith('ripgrep '), `rg --version 输出正确: ${out.trim().split('\n')[0]}`)
} catch {
  assert(false, 'rg --version 可执行')
}

console.log(`\n────────────────────────────────────────`)
console.log(`${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
