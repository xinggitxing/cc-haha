import { beforeAll, describe, expect, test } from 'bun:test'
import { existsSync } from 'fs'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

const COMP_DIR = resolve(import.meta.dirname, '..')

describe('AssistantThinkingMessage', () => {
  test('module file exists', () => {
    expect(existsSync(resolve(COMP_DIR, 'AssistantThinkingMessage.tsx'))).toBe(true)
  })

  test('AssistantRedactedThinkingMessage module exists', () => {
    expect(existsSync(resolve(COMP_DIR, 'AssistantRedactedThinkingMessage.tsx'))).toBe(true)
  })
})

describe('Message.tsx thinking guards removed', () => {
  let source: string

  beforeAll(async () => {
    source = await readFile(resolve(COMP_DIR, '..', 'Message.tsx'), 'utf-8')
  })

  test('no verbose guard for thinking case', () => {
    // The old condition should not exist
    expect(source).not.toContain('!isTranscriptMode && !verbose')
  })

  test('thinking case render block still exists', () => {
    expect(source).toContain('case "thinking"')
  })

  test('redacted_thinking case render block still exists', () => {
    expect(source).toContain('case "redacted_thinking"')
  })
})

describe('Messages.tsx streaming thinking guard removed', () => {
  test('streaming thinking is no longer guarded by verbose', async () => {
    const messagesSource = await readFile(resolve(COMP_DIR, '..', 'Messages.tsx'), 'utf-8')
    const lines = messagesSource.split('\n')
    const streamingLine = lines.find(l => l.includes('streamingThinking?.isStreaming'))
    expect(streamingLine).toBeDefined()
    // Should not have the verbose guard prefix
    expect(streamingLine!.includes('verbose &&')).toBe(false)
  })
})

describe('AssistantThinkingMessage.tsx shouldShowFullThinking', () => {
  test('shouldShowFullThinking is always true', async () => {
    const msgSource = await readFile(resolve(COMP_DIR, 'AssistantThinkingMessage.tsx'), 'utf-8')
    expect(msgSource).toContain('const shouldShowFullThinking = true')
  })
})
