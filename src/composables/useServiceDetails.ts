import { ref, onBeforeMount } from 'vue'
import axios from 'axios'

export default function useServices(): any {
  const serviceDetails = ref<any[]>([])
  const loading = ref<any>(false)
  const error = ref<any>(false)

  const getService = async (id: string): Promise<any> => {
    try {
      // Initialize loading state
      loading.value = true

      // Fetch data from the API
      const { data } = await axios.get(`/api/services/${id}`)

      // Store data in Vue ref
      serviceDetails.value = data
    } catch (err: any) {
      error.value = true
    } finally {
      // Reset loading state
      loading.value = false
    }
  }

  onBeforeMount(async (): Promise<void> => {
    const pathParts = window.location.pathname.split('/')
    const serviceId = pathParts[2]
    if (serviceId) {
      // Fetch services from the API
      await getService(serviceId)
    }
  })

  // Return stateful data
  return {
    serviceDetails,
    loading,
    error,
  }
}
