import type { BlogPost } from "../types"

// This is a mock API function. In a real application, you would fetch data from a database or API.
export async function getBlogPosts(searchTerm = "", category = "All", page = 1, limit = 5): Promise<BlogPost[]> {
  const allPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Transformation",
      excerpt:
        "Explore how artificial intelligence is reshaping the business landscape and driving digital transformation across industries.",
      category: "Artificial Intelligence",
      date: "2023-05-15",
      image: "/placeholder.svg?height=200&width=300",
      author: "John Doe",
      readTime: "5 min read",
      tags: ["AI", "Business", "Innovation"],
    },
    // ... (add more blog posts here)
  ]

  let filteredPosts = allPosts

  if (searchTerm) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  if (category && category !== "All") {
    filteredPosts = filteredPosts.filter((post) => post.category === category)
  }

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return filteredPosts.slice(startIndex, endIndex)
}

export async function getCategories(): Promise<string[]> {
  return ["All", "Artificial Intelligence", "Digital Strategy", "IoT", "Cybersecurity", "Technology", "Cloud Computing"]
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getBlogPosts()
  return Array.from(new Set(posts.flatMap((post) => post.tags)))
}

