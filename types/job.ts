export interface JobPosting {
  metadata: {
    date: string
    location: string
    position: string
  }
  company: {
    name: string
    description: string
    mission: string
  }
  context: {
    team: {
      composition: string[]
      project: string
    }
  }
  responsibilities: string[]
  requirements: {
    experience: {
      general: string
      frontend: string
      project: string
    }
    technical_skills: string[]
    soft_skills: string[]
  }
  plusPoints: string[]
  benefits: {
    learning: string
    culture: {
      scope: string
      stats: {
        employees: number
        markets: number
        stores: string
      }
    }
  }
  values: string[]
} 