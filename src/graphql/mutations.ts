import { Context } from "./server.js"
import * as db from "../supabase/adapter"

const Mutations = {
  addStashable: async (
    _: any,
    args: any,
    context: Context
  ): Promise<boolean> => {
    const { supabase } = context

    return db.addStashable(supabase!, args.link)
  },
  deleteStashable: async (
    _: any,
    args: any,
    context: Context
  ): Promise<boolean> => {
    const { supabase } = context

    return db.deleteStashable(supabase!, args.id)
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
