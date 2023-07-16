import { prisma } from '@/app/lib/prisma'
import React from 'react'

const getTrips = async () => {
  const trips = await prisma.trip.findMany({})
  return trips
}

const Trips = async () => {

  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())

  console.log({data})

  return (

    <div>
      {data.map((post: any) => (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          </div>
      ))}
    </div>
  )
}

export default Trips