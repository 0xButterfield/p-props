import pMap from 'p-map'

export default async function pProps(input, options = undefined) {
  const isMap = input instanceof Map
  const entries = isMap ? [...input.entries()] : Object.entries(input)
  const values = await pMap(entries, options)
  const mappedEntries = entries.map(([key], index) => [key, values[index]])
  return isMap ? new Map(mappedEntries) : Object.fromEntries(mappedEntries)
}
