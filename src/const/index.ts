export interface IBlogSummary {
  id: number
  title: string
  imagePath: string
  categories: { id: number; label: string }[]
}
