export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      stash: {
        Row: {
          id: number
          inserted_at: string
          updated_at: string
          name: string
          description: string | null
          data: Json | null
        }
        Insert: {
          id?: number
          inserted_at?: string
          updated_at?: string
          name: string
          description?: string | null
          data?: Json | null
        }
        Update: {
          id?: number
          inserted_at?: string
          updated_at?: string
          name?: string
          description?: string | null
          data?: Json | null
        }
      }
      stashable: {
        Row: {
          id: number
          inserted_at: string
          updated_at: string
          link: string | null
          stash_id: number | null
        }
        Insert: {
          id?: number
          inserted_at?: string
          updated_at?: string
          link?: string | null
          stash_id?: number | null
        }
        Update: {
          id?: number
          inserted_at?: string
          updated_at?: string
          link?: string | null
          stash_id?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
