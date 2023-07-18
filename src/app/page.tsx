'use client'
import {signIn, useSession} from 'next-auth/react'

export default function Home() {
  const {data} = useSession()	



  return (
    <div>
      <button onClick={()=>{signIn}}>
        Login
      </button>
      <p>
        {data ? `Signed in as ${data?.user?.email}`: 'Not signed in'}
      </p>
      <img src={data?.user?.image} alt={data?.user?.email}/>
    </div>
  )
}
