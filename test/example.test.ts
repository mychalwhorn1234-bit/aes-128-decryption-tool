import { describe, it, expect } from 'vitest'
import { greet } from '../src/util'

describe('greet', () => {
  it('greets a name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!')
  })
})
