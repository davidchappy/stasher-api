import { Context } from "./server.js"
import * as db from "../supabase/adapter"
import * as types from "./__generated__/graphql"
import ogs from "open-graph-scraper"

const Query = {
  stashables: async (
    _: any,
    args: any,
    context: Context
  ): Promise<types.Stashable[]> => {
    const { supabase } = context

    const stashables: types.Stashable[] = await db.getStashables(
      supabase!,
      args.filter
    )

    const returnedStashables: types.Stashable[] = await Promise.all(
      stashables.map(async (stashable): Promise<types.Stashable> => {
        const ogsOptions = { url: stashable!.link || "" }

        try {
          const ogsData: Awaited<ReturnType<typeof ogs>> = await ogs(ogsOptions)

          const ogsResult: any = ogsData.result
          const { ogImage, ogTitle, ogDescription, ogType, ogUrl } = ogsResult

          return {
            ...stashable,
            ogResult: { ogImage, ogTitle, ogDescription, ogType, ogUrl }
          }
        } catch (error) {
          console.error(
            `error scraping OpenGraph data for ${ogsOptions.url}`,
            error
          )
          return stashable
        }
      })
    )

    return returnedStashables
  }
}

export default Query
