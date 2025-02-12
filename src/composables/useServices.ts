import { ref, onBeforeMount } from 'vue'
import axios from 'axios'
import type { Service } from '@/types/service'

export default function useServices() {
  const services = ref<Record<number, Array<Service>>>([])
  const totalServices = ref<number>(0)
  const loading = ref<boolean>(false)
  const error = ref<boolean>(false)

  const paginateResults = (data: Array<Service>): Record<number, Array<Service>> => {
    // need to show 9 services per page
    const perPage = 9

    // slice into groups of 9
    // e.g. { 0: [0, 1, 2, 3, 4, 5, 6, 7, 8], 1: [9, 10, 11, 12, 13, 14, 15, 16, 17] }
    const paginatedData = data.reduce((acc: Record<number, Array<Service>>, curr: Service, index: number) => {
      const pageIndex = Math.floor(index / perPage)
      if (!acc[pageIndex]) {
        acc[pageIndex] = []
      }
      acc[pageIndex].push(curr)
      return acc
    }, {})

    return paginatedData
  }

  const getServices = async (): Promise<void> => {
    try {
      // Initialize loading state
      loading.value = true
      // Fetch data from the API
      const { data } = await axios.get<Array<Service>>('/api/services')

      // Store data in Vue ref
      services.value = paginateResults(data)
      totalServices.value = data.length
    } catch (err: unknown) {
      error.value = true
    } finally {
      // Reset loading state
      loading.value = false
    }
  }

  const searchServices = async (searchTerm: string): Promise<void> => {
    try {
      // Initialize loading state
      loading.value = true

      // Fetch data from the API
      const { data } = await axios.get(`/api/services?q=${searchTerm}`)

      // Store data in Vue ref
      services.value = paginateResults(data)
      totalServices.value = data.length
    } catch (err: unknown) {
      error.value = true
    } finally {
      // Reset loading state
      loading.value = false
    }
  }

  onBeforeMount(async (): Promise<void> => {
    // Fetch services from the API
    await getServices()
  })

  // Return stateful data
  return {
    services,
    totalServices,
    searchServices,
    loading,
    error,
  }
}
