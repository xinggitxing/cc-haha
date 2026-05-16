import { afterEach, beforeEach, describe, expect, test } from 'bun:test'
import {
  checkDomainBlocklist,
  ip4ToInt,
  isPrivateIPv4,
  shouldSkipWebFetchPreflight,
} from './utils.js'

describe('shouldSkipWebFetchPreflight', () => {
  const originalDesktopServerUrl = process.env.CC_HAHA_DESKTOP_SERVER_URL
  const originalSkipEnv = process.env.CC_HAHA_SKIP_WEB_FETCH_PREFLIGHT

  beforeEach(() => {
    delete process.env.CC_HAHA_DESKTOP_SERVER_URL
    delete process.env.CC_HAHA_SKIP_WEB_FETCH_PREFLIGHT
  })

  afterEach(() => {
    if (originalDesktopServerUrl === undefined) {
      delete process.env.CC_HAHA_DESKTOP_SERVER_URL
    } else {
      process.env.CC_HAHA_DESKTOP_SERVER_URL = originalDesktopServerUrl
    }
    if (originalSkipEnv === undefined) {
      delete process.env.CC_HAHA_SKIP_WEB_FETCH_PREFLIGHT
    } else {
      process.env.CC_HAHA_SKIP_WEB_FETCH_PREFLIGHT = originalSkipEnv
    }
  })

  test('respects explicit true from settings', () => {
    expect(
      shouldSkipWebFetchPreflight({ skipWebFetchPreflight: true }),
    ).toBe(true)
  })

  test('respects explicit false from settings even on desktop', () => {
    process.env.CC_HAHA_DESKTOP_SERVER_URL = 'http://127.0.0.1:3456'

    expect(
      shouldSkipWebFetchPreflight({ skipWebFetchPreflight: false }),
    ).toBe(false)
  })

  test('defaults to enabled for desktop sessions', () => {
    process.env.CC_HAHA_DESKTOP_SERVER_URL = 'http://127.0.0.1:3456'

    expect(shouldSkipWebFetchPreflight({})).toBe(true)
  })

  test('respects CC_HAHA_SKIP_WEB_FETCH_PREFLIGHT env var', () => {
    process.env.CC_HAHA_SKIP_WEB_FETCH_PREFLIGHT = '1'

    expect(shouldSkipWebFetchPreflight({})).toBe(true)
  })

  test('defaults to disabled outside desktop sessions', () => {
    expect(shouldSkipWebFetchPreflight({})).toBe(false)
  })
})

// ── ip4ToInt ──────────────────────────────────────────────
describe('ip4ToInt', () => {
  test('converts valid IPv4 to integer', () => {
    // 127.0.0.1 = 0x7f000001 = 2130706433
    expect(ip4ToInt('127.0.0.1')).toBe(0x7f000001)
    // 0.0.0.0
    expect(ip4ToInt('0.0.0.0')).toBe(0)
    // 255.255.255.255
    expect(ip4ToInt('255.255.255.255')).toBe(0xffffffff)
    // 8.8.8.8 = 0x08080808 = 134744072
    expect(ip4ToInt('8.8.8.8')).toBe(0x08080808)
  })

  test('rejects invalid inputs', () => {
    expect(ip4ToInt('')).toBeNull()
    expect(ip4ToInt('not-an-ip')).toBeNull()
    expect(ip4ToInt('256.1.2.3')).toBeNull() // > 255
    expect(ip4ToInt('1.2.3')).toBeNull() // too few parts
    expect(ip4ToInt('1.2.3.4.5')).toBeNull() // too many parts
    expect(ip4ToInt('1.2.3.-1')).toBeNull() // negative
  })
})

// ── isPrivateIPv4 ─────────────────────────────────────────
describe('isPrivateIPv4', () => {
  test('detects loopback (127.0.0.0/8)', () => {
    expect(isPrivateIPv4('127.0.0.1')).toBe('loopback')
    expect(isPrivateIPv4('127.255.255.255')).toBe('loopback')
  })

  test('detects private 10.x.x.x (10.0.0.0/8)', () => {
    expect(isPrivateIPv4('10.0.0.1')).toBe('private')
    expect(isPrivateIPv4('10.255.255.255')).toBe('private')
  })

  test('detects private 192.168.x.x (192.168.0.0/16)', () => {
    expect(isPrivateIPv4('192.168.1.1')).toBe('private')
    expect(isPrivateIPv4('192.168.255.255')).toBe('private')
  })

  test('detects private 172.16.x.x (172.16.0.0/12)', () => {
    expect(isPrivateIPv4('172.16.0.1')).toBe('private')
    expect(isPrivateIPv4('172.31.255.255')).toBe('private')
  })

  test('detects link-local (169.254.0.0/16)', () => {
    expect(isPrivateIPv4('169.254.1.1')).toBe('link-local')
    expect(isPrivateIPv4('169.254.255.255')).toBe('link-local')
  })

  test('allows public IPs', () => {
    expect(isPrivateIPv4('8.8.8.8')).toBeNull()
    expect(isPrivateIPv4('93.184.216.34')).toBeNull() // example.com
    expect(isPrivateIPv4('1.1.1.1')).toBeNull()
  })

  test('detects CGNAT (100.64.0.0/10)', () => {
    expect(isPrivateIPv4('100.64.0.1')).toBe('shared')
    expect(isPrivateIPv4('100.127.255.255')).toBe('shared')
  })

  test('detects reserved/multicast', () => {
    expect(isPrivateIPv4('224.0.0.1')).toBe('multicast')
    expect(isPrivateIPv4('240.0.0.1')).toBe('reserved')
  })
})

// ── checkDomainBlocklist ──────────────────────────────────
describe('checkDomainBlocklist', () => {
  const testCases: [string, string][] = [
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

  for (const [domain, expected] of testCases) {
    test(`${domain} → ${expected}`, async () => {
      const result = await checkDomainBlocklist(domain)
      expect(result.status).toBe(expected)
    })
  }
})
