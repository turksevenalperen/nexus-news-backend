import { redirect } from 'next/navigation'

export default async function HomePage() {
  // Localhost:3000'e gelince direkt admin paneline yönlendir
  redirect('/admin')
}
