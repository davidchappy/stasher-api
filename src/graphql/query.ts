import { Context } from "./server.js"
import * as db from "../supabase/adapter"
import * as types from "./__generated__/graphql"

const Query = {
  stashables: async (
    _: any,
    args: any,
    context: Context
  ): Promise<types.Stashable[]> => {
    const { supabase } = context

    return db.getStashables(supabase!, args.filter) as Promise<
      types.Stashable[]
    >
  }
}

export default Query
