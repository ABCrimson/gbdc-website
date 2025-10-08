import { Card } from '@/components/ui/card'
import programs from '@/data/programs.json'

interface Program {
  id: string
  name: string
  ageRange: string
  description: string
  features: string[]
  icon?: string
}

export function ProgramCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {(programs as Program[]).map((program) => (
        <Card
          key={program.id}
          className="p-6 hover:shadow-lg transition-shadow duration-300 program-card"
        >
          <div className="program-content">
            {program.icon && (
              <div className="text-5xl mb-4" aria-hidden="true">
                {program.icon}
              </div>
            )}
            <h3 className="text-2xl font-bold text-daycare-blue dark:text-daycare-blue mb-2">
              {program.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
              {program.ageRange}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {program.description}
            </p>
            {program.features && program.features.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Features:
                </h4>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        className="w-4 h-4 text-daycare-green mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}
