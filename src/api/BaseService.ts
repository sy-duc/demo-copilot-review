import type { AxiosRequestConfig } from 'axios'
import api from './api'
import { useUIStore } from '@/stores/ui'

const uiStore = useUIStore()

export class BaseService {
  protected BASE_URL: string

  constructor(baseUrl: string) {
    this.BASE_URL = baseUrl
  }

  protected async get<T>(endpoint: string, params?: object): Promise<T> {
    uiStore.setLoading(true)
    const response = await api.get<T>(`${this.BASE_URL}${endpoint}`, { params })
    uiStore.setLoading(false)
    return response.data
  }

  protected async post<T>(
    endpoint: string,
    data: object,
    config: AxiosRequestConfig = {},
  ): Promise<T> {
    uiStore.setLoading(true)
    const response = await api.post<T>(`${this.BASE_URL}${endpoint}`, data, config)
    uiStore.setLoading(false)
    return response.data
  }

  protected async put<T>(endpoint: string, data: object): Promise<T> {
    uiStore.setLoading(true)
    const response = await api.put<T>(`${this.BASE_URL}${endpoint}`, data)
    uiStore.setLoading(false)
    return response.data
  }

  protected async delete<T>(endpoint: string): Promise<T> {
    uiStore.setLoading(true)
    const response = await api.delete<T>(`${this.BASE_URL}${endpoint}`)
    uiStore.setLoading(false)
    return response.data
  }
}
