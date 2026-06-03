import { DESIGN_ASSETS } from '../assets/designAssets'

const AVATARS = [DESIGN_ASSETS.avatar1, DESIGN_ASSETS.avatar2, DESIGN_ASSETS.avatar3]

export const TESTIMONIALS = Array.from({ length: 8 }, (_, index) => ({
  image: AVATARS[index % AVATARS.length],
  name: 'Andrew Schultz',
}))
