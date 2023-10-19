
export function KpiBox({ title, value}) {
  return (
      <div className="flex flex-col bg-gray-400/5 p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-600 pt-4">{title}</dt>
          <dd className="order-first text-5xl font-bold tracking-tight text-indigo-600">{value}</dd>
      </div>

  )
}