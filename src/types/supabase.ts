export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          technologies: string[]
          image_url: string
          github_url: string | null
          live_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          technologies: string[]
          image_url: string
          github_url?: string | null
          live_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          technologies?: string[]
          image_url?: string
          github_url?: string | null
          live_url?: string | null
        }
      }
      skills: {
        Row: {
          id: string
          created_at: string
          name: string
          category: string
          proficiency: number
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          category: string
          proficiency: number
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          category?: string
          proficiency?: number
        }
      }
      messages: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          message: string
          read: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          message: string
          read?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          message?: string
          read?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}