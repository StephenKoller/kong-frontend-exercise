import { ref, onBeforeMount } from 'vue'
import axios from 'axios'

// This composable is a simplified example for the exercise **and could likely be improved**.
// Feel free to leave as-is, modify, or remove this file (and any others) as desired.
// https://vuejs.org/guide/reusability/composables.html

export default function useServices(): any {
  const services = ref<any[]>([])
  const loading = ref<any>(false)
  const error = ref<any>(false)

  const paginateResults = (data: any) => {
    // need to show 9 services per page
    const perPage = 9

    // slice into groups of 9
    // e.g. { 0: [0, 1, 2, 3, 4, 5, 6, 7, 8], 1: [9, 10, 11, 12, 13, 14, 15, 16, 17] }
    const paginatedData = data.reduce((acc: any, curr: any, index: number) => {
      const pageIndex = Math.floor(index / perPage)
      if (!acc[pageIndex]) {
        acc[pageIndex] = []
      }
      acc[pageIndex].push(curr)
      return acc
    }, [])

    console.log(paginatedData)

    return paginatedData
  }

  const getServices = async (): Promise<any> => {
    try {
      // Initialize loading state
      loading.value = true

      // Fetch data from the API
      const { data } = await axios.get('/api/services')

      // Store data in Vue ref
      services.value = paginateResults(data)
    } catch (err: any) {
      error.value = true
    } finally {
      // Reset loading state
      loading.value = false
    }
  }

  const searchServices = async (searchTerm: string): Promise<any> => {
    try {
      // Initialize loading state
      loading.value = true

      // Fetch data from the API
      const { data } = await axios.get(`/api/services?q=${searchTerm}`)

      // Store data in Vue ref
      services.value = paginateResults(data)
    } catch (err: any) {
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
    searchServices,
    loading,
    error,
  }
}
