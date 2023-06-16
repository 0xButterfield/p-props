import { Options } from 'p-map'

export type PromiseResult<Value> = Value extends PromiseLike<infer Result>
  ? Result
  : Value

export default function pProps<
  KeyType,
  ValueType,
  MappedValueType = PromiseResult<ValueType>,
>(
  map: ReadonlyMap<KeyType, ValueType>,
  options?: Options,
): Promise<Map<KeyType, MappedValueType>>

export default function pProps<
  InputType extends Record<string, any>,
  ValueType extends InputType[keyof InputType],
  MappedValueType = PromiseResult<ValueType>,
>(
  map: InputType,
  options?: Options,
): Promise<{ [key in keyof InputType]: PromiseResult<InputType[key]> }>

export { Options } from 'p-map'
