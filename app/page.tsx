import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Add type definitions at the top of the file
type JobMetadata = {
  date: string
  location: string
  position: string
}

type JobContext = {
  project: string
  team: {
    composition: string[]
    mission: string
  }
}

type JobRequirements = {
  experience: Record<string, string>
  technical_skills: string[]
  personal_qualities: string[]
}

type JobBenefits = {
  collaborators: string
  learning: string
  impact: string
}

type CompanyStats = {
  employees: string
  markets: string
  stores: string
}

type JobPosting = {
  metadata: JobMetadata
  company: {
    description: string
    stats: CompanyStats
  }
  context: JobContext
  responsibilities: string[]
  requirements: JobRequirements
  plusPoints: string[]
  benefits: JobBenefits
  values: string[]
  equalOpportunity: string
}

async function getJobData(): Promise<JobPosting> {
  const res = await import("@/public/info.json")
  return res.jobPosting
}

export default async function Home() {
  const jobData = await getJobData()

  return (
    <main className="min-h-screen bg-white p-2">
      {/* Hero Banner */}
      <div>
        <div className="font-bold text-sm flex flex-col mb-6">
          <span>Date : {jobData.metadata.date}</span>
          <span>Lieu : {jobData.metadata.location}</span>
        </div>
        <h1 className="text-5xl font-bold mb-6">{jobData.metadata.position}</h1>
        <Button size="lg">
          Postuler maintenant
        </Button>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Company Description */}
            <section>
              <p className="text-lg text-gray-700 mb-6">{jobData.company.description}</p>
            </section>

            <Separator />

            {/* Context */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Le Contexte</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-6">{jobData.context.project}</p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4">L&apos;équipe :</h3>
                  <ul className="space-y-2">
                    {jobData.context.team.composition.map((member, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <span >◆</span> {member}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-gray-700">{jobData.context.team.mission}</p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Vos Missions</h2>
              <ul className="space-y-3">
                {jobData.responsibilities.map((resp, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span>◆</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Separator />

            {/* Requirements */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Votre Profil</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Expérience</h3>
                  <ul className="space-y-3">
                    {Object.values(jobData.requirements.experience).map((exp, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-gray-50 text-gray-700">
                          {exp}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Compétences Techniques</h3>
                  <div className="flex flex-wrap gap-2">
                    {jobData.requirements.technical_skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Qualités Personnelles</h3>
                  <div className="flex flex-wrap gap-2">
                    {jobData.requirements.personal_qualities.map((quality: string, i) => (
                      <Badge key={i} variant="outline" className="bg-white">
                        {quality}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Plus Points */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Les Plus</h2>
              <ul className="space-y-3">
                {jobData.plusPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span>◆</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sticky Apply Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <h2 className="text-xl font-bold">Postuler</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button className="w-full hover:bg-[#CC006A] text-white">
                  Postuler avec LinkedIn
                </Button>
                <Button variant="outline" className="w-full">
                  Postuler avec mon CV
                </Button>

                <Separator />

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Avantages Sephora</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF0080]">⬧</span> {jobData.benefits.collaborators}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF0080]">⬧</span> {jobData.benefits.learning}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF0080]">⬧</span> {jobData.benefits.impact}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF0080]">⬧</span> {jobData.company.stats.employees}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF0080]">⬧</span> {jobData.company.stats.markets}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF0080]">⬧</span> {jobData.company.stats.stores}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Nos Valeurs</h3>
                    <div className="flex flex-wrap gap-2">
                      {jobData.values.map((value, i) => (
                        <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700">
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 italic">
                    {jobData.equalOpportunity}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
