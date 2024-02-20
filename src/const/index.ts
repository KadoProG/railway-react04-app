export interface IBlogSummary {
  id: string
  title: string
  imagePath: string
  category: { categoryId: string; label: string } | null
}
