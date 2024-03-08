import { GithubProfile } from '@/components/github-profile'
import { LongTimeComponent } from '@/components/long-time-component'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div>
      <h1>Home!</h1>
      <p>Lorem Ipsum</p>
      <Suspense fallback={<p>Carregando LongTimeComponent</p>}>
        <LongTimeComponent />
      </Suspense>
      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
