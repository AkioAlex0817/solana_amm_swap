import create from 'zustand'
import * as anchor from '@project-serum/anchor'

export const CONFIG_PDA_SEED = 'config'
export const POOL_AUTHORITY_SEED = 'pool_authority'
export const POOL_MINT_SEED = 'pool_mint'
export const TOKEN_VAULT_PDA_SEED = 'token_vault'

export type ProgramStore = {
  program: anchor.Program<anchor.Idl> | undefined
}

const useProgram = create<ProgramStore>((set, get) => ({
  program: undefined
}))

export default useProgram
