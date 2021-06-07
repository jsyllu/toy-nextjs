import { useRouter } from 'next/router'

export default function DynamicComment () {
  const router = useRouter()
  const { comment } = router.query

  return (
    <div>
      <h1>Dynamic Comment</h1>
      <p>Comment = {comment}</p>
    </div>
  )
}
