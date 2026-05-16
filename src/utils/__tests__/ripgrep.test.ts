import { afterEach, describe, expect, test } from 'bun:test'
import { rm, writeFile } from 'fs/promises'
import { join } from 'path'
import { tmpdir } from 'os'
import {
  isUsableBuiltinRipgrepPath,
  mingwToWindowsPath,
  ripgrepCommand,
} from '../ripgrep.js'

const tempFiles: string[] = []

afterEach(async () => {
  await Promise.all(tempFiles.splice(0).map(path => rm(path, { force: true })))
})

describe('isUsableBuiltinRipgrepPath', () => {
  test('rejects Bun virtual filesystem paths', () => {
    expect(
      isUsableBuiltinRipgrepPath('B:\\~BUN\\root\\vendor\\ripgrep\\x64-win32\\rg.exe'),
    ).toBe(false)
    expect(
      isUsableBuiltinRipgrepPath('/$bunfs/root/vendor/ripgrep/arm64-darwin/rg'),
    ).toBe(false)
  })

  test('rejects missing paths', () => {
    expect(
      isUsableBuiltinRipgrepPath(join(tmpdir(), 'missing-cc-haha-rg')),
    ).toBe(false)
  })

  test('accepts real filesystem paths', async () => {
    const filePath = join(tmpdir(), `cc-haha-rg-${Date.now()}`)
    await writeFile(filePath, '')
    tempFiles.push(filePath)

    expect(isUsableBuiltinRipgrepPath(filePath)).toBe(true)
  })
})

// ── mingwToWindowsPath ────────────────────────────────────
describe('mingwToWindowsPath', () => {
  test('converts /c/Users/... to C:\\Users\\...', () => {
    expect(mingwToWindowsPath('/c/Users/test')).toBe('c:\\Users\\test')
  })

  test('converts /C/Projects/rg.exe to C:\\Projects\\rg.exe', () => {
    expect(mingwToWindowsPath('/C/Projects/rg.exe')).toBe('C:\\Projects\\rg.exe')
  })

  test('converts /cygdrive/d/tools to d:\\tools', () => {
    expect(mingwToWindowsPath('/cygdrive/d/tools')).toBe('d:\\tools')
  })

  test('preserves Windows-style paths', () => {
    expect(mingwToWindowsPath('C:\\Users\\test')).toBe('C:\\Users\\test')
    expect(mingwToWindowsPath('D:\\tools\\rg.exe')).toBe('D:\\tools\\rg.exe')
  })

  test('preserves Unix absolute paths on non-Windows', () => {
    expect(mingwToWindowsPath('/usr/bin/rg')).toBe('/usr/bin/rg')
  })

  test('handles edge cases', () => {
    // Single slash + drive letter
    expect(mingwToWindowsPath('/x/')).toBe('x:\\')
    // Deep nested path
    expect(mingwToWindowsPath('/e/very/deep/path/to/some/file.txt')).toBe(
      'e:\\very\\deep\\path\\to\\some\\file.txt',
    )
  })
})

// ── Integration: ripgrep detection ─────────────────────────
describe('ripgrepCommand', () => {
  test('finds a usable ripgrep on the current system', () => {
    const { rgPath, rgArgs } = ripgrepCommand()
    expect(rgPath).toBeTruthy()
    expect(rgPath).not.toBe('')
    expect(Array.isArray(rgArgs)).toBe(true)
  })
})
