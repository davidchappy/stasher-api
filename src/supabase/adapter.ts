import { Database } from "./__generated__/supabase"
import getSupabase from "./init"

// type Stashable = Database["public"]["Tables"]["stashable"]["Row"]

type StashableFilters = {
  search?: string
}

export const getStashables = async (
  supabase: ReturnType<typeof getSupabase>,
  filter: StashableFilters = {}
) => {
  const search = filter?.search

  const { data, error } = await supabase!
    .from("stashable")
    .select("*")
    .order("inserted_at", { ascending: true })

  // .ilike("link", `%${search}%`)

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const addStashable = async (
  supabase: ReturnType<typeof getSupabase>,
  link: string
) => {
  const { error } = await supabase!.from("stashable").insert({ link })

  if (error) {
    throw new Error(error.message)
  }

  return true
}

export const deleteStashable = async (
  supabase: ReturnType<typeof getSupabase>,
  id: number
) => {
  const { error } = await supabase!.from("stashable").delete().eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  return true
}

export const updateStashable = async (
  supabase: ReturnType<typeof getSupabase>,
  id: number,
  link: string
) => {
  const { error } = await supabase!
    .from("stashable")
    .update({ link })
    .eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  return true
}
