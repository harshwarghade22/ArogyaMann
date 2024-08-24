/* eslint-disable no-unused-vars */
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../actions/projectActions';

const CardBlog = () => {
  const dispatch = useDispatch()
  const blogsList = useSelector(state => state.getBlogs)

  const { blogs = [] } = blogsList;

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  // console.log(blogs)



  return (
    <>
      {
        blogs.map(
          blog => (
            <Link to={`blogDetail/${blog.id}`} key={blog.id} className='w-1/4 bg-slate-300 p-4 shadow-2xl hover:scale-105'>
              <h1 className='text-2xl font-bold mb-4'>{blog.title}</h1>
              <p className=''>{blog.content.substring(0,400)}...</p>
              <div className='flex justify-between mt-3' >
                <p className='text-lg font-semibold'>Created at : {blog.created_at}</p>
                <Link className='text-lg text-blue-600'>
                  Read More
                </Link>
              </div>
            </Link>
          )
        )
      }
    </>

  )
}

export default CardBlog
