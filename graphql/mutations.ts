import { Context } from "./server"
import * as db from "../supabase/adapter"
import * as types from "./__generated__/graphql"

const Mutations = {
  addGoodie: async (_: any, args: any, context: Context): Promise<boolean> => {
    const { supabase } = context

    console.log("adding goodie", args.link)

    return db.addGoodie(supabase!, args.link)
  },
  removeGoodie: async (
    _: any,
    args: any,
    context: Context
  ): Promise<types.Goodie> => {
    const { supabase } = context

    return db.removeGoodie(supabase!, args.id) as Promise<types.Goodie>
  },
  updateGoodie: async (
    _: any,
    args: any,
    context: Context
  ): Promise<boolean> => {
    const { supabase } = context

    return db.updateGoodie(supabase!, args.id, args.link)
  }
}

export default Mutations
