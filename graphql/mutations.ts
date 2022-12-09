import { Context } from "./server"
import * as db from "../supabase/adapter"
import * as types from "./__generated__/graphql"

const Mutations = {
  addStashable: async (
    _: any,
    args: any,
    context: Context
  ): Promise<boolean> => {
    const { supabase } = context

    console.log("adding stashable", args.link)

    return db.addStashable(supabase!, args.link)
  },
  deleteStashable: async (
    _: any,
    args: any,
    context: Context
  ): Promise<types.Stashable> => {
    const { supabase } = context

    return db.deleteStashable(supabase!, args.id) as Promise<types.Stashable>
  },
  updateStashable: async (
    _: any,
    args: any,
    context: Context
  ): Promise<boolean> => {
    const { supabase } = context

    return db.updateStashable(supabase!, args.id, args.link)
  }
}

export default Mutations
