import { UserRole } from './enums'

export const API_TIMEOUT = 15000

export const UserRoleName: Record<UserRole, string> = {
  [UserRole.ADMIN]: 'Admin',
  [UserRole.USER]: 'User',
  [UserRole.GUEST]: 'Guest',
}
