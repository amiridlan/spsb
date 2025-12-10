export interface NavItem {
  name: string
  href?: string
  to?: string
  children?: NavItem[]
}

export interface Service {
  title: string
  description: string
  icon: () => any
  features: string[]
  route: string
}

export interface KeyPoint {
  title: string
  description: string
}

export interface SocialLink {
  name: string
  href: string
  icon: () => any
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}