'use client'

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession()

  if (session.data?.user) {
    return <div>Use client: user is sign in</div>
  }

  return <div>Use client: user is not sign in</div>
}