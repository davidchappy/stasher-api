import { Context } from "./server"
import * as db from "../supabase/adapter"
import * as types from "../graphql/__generated__/graphql"

const Query = {
  goodies: async (
    _: any,
    args: any,
    context: Context
  ): Promise<types.Goodie[]> => {
    const { supabase } = context

    return db.getGoodies(supabase!, args.filter) as Promise<types.Goodie[]>
  }
}

export default Query
