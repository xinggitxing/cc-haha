/**
 * SSRF 安全检查验证脚本
 * 独立运行，不依赖 bun:test（bun v1.3.13 有加载 axios/lru-cache 的 segfault bug）
 * 用法: bun run scripts/tests/verify-ssrf.ts
 */
import { ip4ToInt, isPrivateIPv4, checkDomainBlocklist } from '../../src/tools/WebFetchTool/utils.js'

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

// ── ip4ToInt ───────────────────────────────────
console.log('\n=== ip4ToInt ===')
assert(ip4ToInt('127.0.0.1') === 0x7f000001, '127.0.0.1 → 0x7f000001')
assert(ip4ToInt('0.0.0.0') === 0, '0.0.0.0 → 0')
assert(ip4ToInt('255.255.255.255') === 0xffffffff, '255.255.255.255 → 0xffffffff')
assert(ip4ToInt('8.8.8.8') === 0x08080808, '8.8.8.8 → 0x08080808')
assert(ip4ToInt('') === null, 'empty → null')
assert(ip4ToInt('not-ip') === null, 'invalid → null')
assert(ip4ToInt('256.1.2.3') === null, '>255 → null')
assert(ip4ToInt('1.2.3') === null, 'too few parts → null')
assert(ip4ToInt('1.2.3.4.5') === null, 'too many parts → null')
assert(ip4ToInt('1.2.3.-1') === null, 'negative → null')

// ── isPrivateIPv4 ──────────────────────────────
console.log('\n=== isPrivateIPv4 ===')
assert(isPrivateIPv4('127.0.0.1') === 'loopback', '127.0.0.1 → loopback')
assert(isPrivateIPv4('127.255.255.255') === 'loopback', '127.255.255.255 → loopback')
assert(isPrivateIPv4('10.0.0.1') === 'private', '10.0.0.1 → private')
assert(isPrivateIPv4('10.255.255.255') === 'private', '10.255.255.255 → private')
assert(isPrivateIPv4('192.168.1.1') === 'private', '192.168.1.1 → private')
assert(isPrivateIPv4('172.16.0.1') === 'private', '172.16.0.1 → private')
assert(isPrivateIPv4('172.31.255.255') === 'private', '172.31.255.255 → private')
assert(isPrivateIPv4('169.254.1.1') === 'link-local', '169.254.1.1 → link-local')
assert(isPrivateIPv4('100.64.0.1') === 'shared', '100.64.0.1 → shared (CGNAT)')
assert(isPrivateIPv4('224.0.0.1') === 'multicast', '224.0.0.1 → multicast')
assert(isPrivateIPv4('240.0.0.1') === 'reserved', '240.0.0.1 → reserved')
assert(isPrivateIPv4('8.8.8.8') === null, '8.8.8.8 → public')
assert(isPrivateIPv4('93.184.216.34') === null, '93.184.216.34 → public')

// ── checkDomainBlocklist ───────────────────────
console.log('\n=== checkDomainBlocklist ===')
const domainCases: [string, string][] = [
  ['127.0.0.1', 'blocked'],
  ['localhost', 'blocked'],
  ['0.0.0.0', 'blocked'],
  ['::1', 'blocked'],
  ['192.168.1.1', 'blocked'],
  ['10.0.0.1', 'blocked'],
  ['172.16.0.1', 'blocked'],
  ['169.254.1.1', 'blocked'],
  ['8.8.8.8', 'allowed'],
  ['example.com', 'allowed'],
]
for (const [domain, expected] of domainCases) {
  const r = await checkDomainBlocklist(domain)
  assert(r.status === expected, `${domain} → ${expected} (got: ${r.status}${r.reason ? ', ' + r.reason : ''})`)
}

// ── Summary ────────────────────────────────────
console.log(`\n${'─'.repeat(40)}`)
console.log(`${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
