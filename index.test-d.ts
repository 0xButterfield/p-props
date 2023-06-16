import { expectType } from 'tsd'
import pProps from './index.js'

expectType<Promise<{ [key in 'foo']: string }>>(pProps({ foo: 'bar' }))
expectType<Promise<{ [key in 'foo']: string }>>(pProps({ foo: 'bar' }))
expectType<Promise<{ [key in 'foo']: string }>>(
  pProps(
    { foo: 'bar' },
    {
      concurrency: 1,
    },
  ),
)

const hashMap = {
  unicorn: Promise.resolve(1),
  foo: 'bar',
}

expectType<Promise<{ [key in 'unicorn' | 'foo']: string | number }>>(
  pProps(hashMap),
)

const partialMap: { foo?: Promise<string> } = {}
expectType<Promise<{ foo?: string }>>(pProps(partialMap))

const map = new Map<number, string | Promise<string>>([
  [1, Promise.resolve('1')],
  [2, '2'],
])

const result = await pProps(map)
expectType<Map<number, string>>(result)
expectType<string | undefined>(result.get(1))

expectType<Promise<Map<number, string>>>(pProps(map))
expectType<Promise<Map<number, number>>>(
  pProps(map, {
    concurrency: 1,
  }),
)
