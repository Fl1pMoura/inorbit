import { useQuery } from '@tanstack/react-query'
import { summaryService } from '../services/summaryService'
import type { Summary } from '../entities/Summary'

export function useSummary() {
  const { data, isFetching: isFetchingSummary } = useQuery<Summary>({
    queryKey: ['get-summary'],
    queryFn: summaryService.getAll,
    staleTime: 60 * 1000,
  })
  return { summaryData: data, isFetchingSummary }
}
