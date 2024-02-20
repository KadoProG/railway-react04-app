export interface IBlogSummary {
  id: string
  title: string
  imagePath: string
  category: { categoryId: string; label: string } | null
  contents: string
  createdAt: Date
  updatedAt: Date
}
