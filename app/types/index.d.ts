// infer First param (F) and the rest param [R] and extract the R type
export type ExceptFirstParameter<T extends any[]> = T extends [
  infer F,
  ...infer R
]
  ? R
  : never
export type LastParameter<T extends any[]> = T extends [...infer I, infer L]
  ? L
  : never
