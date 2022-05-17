import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'clearWhitelist' : () => Promise<Array<[string, bigint]>>,
  'getSize' : () => Promise<bigint>,
  'lookup' : (arg_0: string) => Promise<[] | [bigint]>,
  'register' : (arg_0: string, arg_1: bigint) => Promise<string>,
  'removeItem' : (arg_0: string) => Promise<[] | [bigint]>,
  'showWhitelist' : () => Promise<Array<[string, bigint]>>,
}
