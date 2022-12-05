import { Database } from "./__generated__/supabase"
import getSupabase from "./init"

// type Goodie = Database["public"]["Tables"]["goodie"]["Row"]

type GoodieFilters = {
  search?: string
}

export const getGoodies = async (
  supabase: ReturnType<typeof getSupabase>,
  filter: GoodieFilters = {}
) => {
  const search = filter?.search

  const { data, error } = await supabase!
    .from("goodie")
    .select("id, link, stash_id")
  // .ilike("link", `%${search}%`)

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const addGoodie = async (
  supabase: ReturnType<typeof getSupabase>,
  link: string
) => {
  const { error } = await supabase!.from("goodie").insert({ link })

  console.log({ error })

  if (error) {
    throw new Error(error.message)
  }

  return true
}

export const removeGoodie = async (
  supabase: ReturnType<typeof getSupabase>,
  id: number
) => {
  const { data, error } = await supabase!.from("goodie").delete().eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const updateGoodie = async (
  supabase: ReturnType<typeof getSupabase>,
  id: number,
  link: string
) => {
  const { error } = await supabase!.from("goodie").update({ link }).eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  return true
}
