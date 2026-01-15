import { BaseService } from '../BaseService'

class AuthService extends BaseService {
  constructor() {
    super('/auth') // Gán BASE_URL
  }

  async login(email: string, password: string) {
    return this.post<{ token: string }>('/login', { email, password })
  }

  async register(name: string, email: string, password: string) {
    return this.post<{ message: string }>('/register', { name, email, password })
  }

  async logout() {
    return this.post<{ message: string }>('/logout', {})
  }
}

export default new AuthService()
