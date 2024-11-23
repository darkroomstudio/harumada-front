import ProgressCard from '@/components/custom/progress-card'

async function getProgressCards() {
  const cards = [
    {
      id: '0',
      dueDate: '2024-06-30',
      progress: 0.2,
      title: '스쿠버 다이빙 배우기',
      currentDay: 6,
      totalDays: 30,
    },
    {
      id: '1',
      dueDate: '2024-08-15',
      progress: 0.4,
      title: '오픈워터 자격증 취득하기',
      currentDay: 12,
      totalDays: 30,
    },
    {
      id: '2',
      dueDate: '2024-09-30',
      progress: 0.1,
      title: '딥다이빙 기술 마스터하기',
      currentDay: 3,
      totalDays: 30,
    },
  ]
  return cards
}

export default async function Page() {
  const cards = await getProgressCards()
  return (
    <main className="p-4">
      <h2 className="mb-4 text-xl font-bold">진행중인 목표</h2>
      {cards.map((card) => (
        <ProgressCard key={card.id} {...card} />
      ))}
    </main>
  )
}
