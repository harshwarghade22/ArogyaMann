/* eslint-disable no-unused-vars */
import { Button, Card, Image, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart } from '@mantine/charts';
import CardBlog from './Blogs/Card';
import AddBlog from './Blogs/AddBlog';
// import {Card} from './Blogs/Card'


const Home = () => {
  return (
    <div className='w-screen px-20'>
      <div className='text-center mt-5'>
        <h1 className='text-6xl font-bold'>Your Mental Health is our </h1>
        <h1 className='text-6xl font-bold mt-4'>First Priority !!</h1>
      </div>
      <div className='w-full h-[480px] mt-4 flex'>
        <div className='w-1/2 h-full p-3'>
          <p className='text-3xl font-semibold'>What is Mental Health Assesment ??</p>
          <p className='text-xl mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis ex rem iure iusto nemo ducimus, iste obcaecati facilis consectetur fuga voluptate quas ab magni earum voluptatem cupiditate et. Error dicta necessitatibus delectus repudiandae, quas hic recusandae beatae labore quaerat quia laborum, quam dolorum veritatis velit illo. Labore, maiores. Quidem et eligendi minima aspernatur! Harum similique iure minima porro rerum tempora saepe deleniti suscipit a vitae nemo modi illum reprehenderit possimus totam, ipsa nesciunt dolore quo? Dolorum molestiae magnam eius, impedit est quo officiis veniam deserunt doloribus corrupti? Vero minima cumque maiores alias eveniet veniam eius, odio nisi saepe error.</p>
          <div className='flex justify-center mt-4'>
            <Link to={"https://chatgpt.com/c/6320364b-18b6-4342-91ca-2b465e038901"}>
              <Button variant="filled" color="gray" size='lg'>Watch Yt Tutorial</Button>
            </Link>

          </div>
        </div>
        <div className='w-1/2 h-full px-40' >
          <img src="https://hips.hearstapps.com/hmg-prod/images/mental-health-quotes-matt-haig-1651243010.jpg" alt="" className='h-[380px] shadow-2xl' />
          <Link to={"assessmentList/"} className='px-20'>
            <Button variant="filled" color="gray" size='lg' className='mt-4'>Take Assessment test</Button>
          </Link>
        </div>
      </div>
      <h1 className='text-5xl font-semibold text-blue-500 mb-4'>Blogs By some of our users...</h1>
      <div className='w-full flex gap-10'>
        <CardBlog/>
        <Link to={'/addBlog'}>
        <div  className='w-[370px] h-[390px] bg-slate-300 flex justify-center items-center text-center' >
            <div className='text-9xl'>
                +
            </div>
            <p className='text-4xl'>Add Blog</p>
        </div>
      </Link>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
