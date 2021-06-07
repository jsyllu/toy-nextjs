import { useRouter } from 'next/router'

export default function DynamicPost () {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div>
      <h1>This is a Dynamic Post Page</h1>
      <p>Post = {pid}</p>
    </div>
  )
}
