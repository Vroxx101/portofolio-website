export default function SkillBar({ name, percentage, inView }: { name: string; percentage: number; inView: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-primary font-bold text-sm">{percentage}%</span>
      </div>
      <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
          style={{ width: inView ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  )
}
