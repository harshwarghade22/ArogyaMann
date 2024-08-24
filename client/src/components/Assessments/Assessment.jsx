/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { assessmentDetail, postResponse } from '../../actions/projectActions'


const Assessment = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [answers, setAnswers] = useState({})
  
  

  useEffect(() => {
    dispatch(assessmentDetail(id))
  }, [dispatch, id])

  const auth = useSelector((state) => state.userLogin);
  const { loading, error, userInfo, isAuthenticated } = auth;

  const assessmentdetail = useSelector((state) => state.assessmentDetail)
  const { assessment } = assessmentdetail

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  console.log("User Id:",user?.id)
  console.log("Assessment id:",id)
  console.log("Access token:",userInfo?.access)



  
  const handleAnswerChange = (questionId, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value
    }))
  }



  const submitHandler = (e) => {
    e.preventDefault()
    // TODO: Save the answers to the database
    dispatch(postResponse(user?.id,id,answers,userInfo.access))
    console.log("Submitted assessment:", answers)

  }

  return (
    <div className='' key={assessment?.key}>
      <h1 className='text-5xl font-bold text-center mt-5'>Welcome for your assessment!!...</h1>
      <h1 className='text-3xl font-bold mt-5'>Assessment Type : {assessment?.name}</h1>
      <p className='text-xl'><span className='text-xl font-bold'>Description</span> : {assessment?.description}</p>
      <div className='flex flex-col items-center'>
        <h1 className='text-center text-4xl font-bold text-blue-500'>Questions: </h1>
        {assessment?.questions?.map(question => (
          <form className="max-w-3xl mx-auto" key={question.id} onSubmit={submitHandler}>
            <label htmlFor={`question-${question.id}`} className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
              {question.text}
            </label>
            <select
              id={`question-${question.id}`}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={e => handleAnswerChange(question.id, e.target.value)}
            >
              <option value={1}>1-Poor</option>
              <option value={2}>2-Avg</option>
              <option value={3}>3-Good</option>
            </select>
          </form>
        ))}
        <button type='submit' onClick={submitHandler} className='bg-green-500 text-white p-2 text-xl rounded-md max-w-xs mt-4'>
          Submit Assessment
        </button>
      </div>
    </div>
  )
}

export default Assessment
