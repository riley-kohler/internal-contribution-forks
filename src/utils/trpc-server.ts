import { initTRPC } from '@trpc/server'
import { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { getServerSession } from 'next-auth'
import SuperJSON from 'superjson'
import { nextAuthOptions } from '../app/api/auth/lib/nextauth-options'
import { verifyAuth, verifyGitHubAppAuth } from '../utils/trpc-middleware'

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getServerSession(opts.req, opts.res, nextAuthOptions)

  return {
    session,
  }
}

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
export const t = initTRPC.context<typeof createContext>().create({
  transformer: SuperJSON,
})

// Base router and procedure helpers
export const router = t.router
const publicProcedure = t.procedure
export type Middleware = Parameters<(typeof t.procedure)['use']>[0]
// Used for general user access token verification
export const procedure = publicProcedure.use(verifyAuth)
// Used for GitHub App authentication verification (non-user events like 'push')
export const gitProcedure = publicProcedure.use(verifyGitHubAppAuth)
