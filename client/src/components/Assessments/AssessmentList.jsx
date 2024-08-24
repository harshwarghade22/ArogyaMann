/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { assesmentList } from '../../actions/projectActions'
import { Link } from 'react-router-dom'

const AssessmentList = () => {

    const dispatch = useDispatch()



    const assessmentList = useSelector(state => state.assessmentList)
    const { assessments = [] } = assessmentList

    useEffect(() => {
        dispatch(assesmentList())
    }, [dispatch])

    const userDetails = useSelector((state) => state.userDetails);
    const { user } = userDetails;
    console.log(user)




    // console.log(assessmentList)


    return (
        <div>
            <h2 className='text-xl font-bold'>Assessment List</h2>
            <h1 className='text-xl font-bold'>Welcome {user?.name} for your assessment test </h1>
            {assessments.map(assessment => (
                <div key={assessment.id} className='mt-4'>
                    <h3 className='font-bold'>{assessment.name}</h3>
                    <p>{assessment.description}</p>
                    <h1 className='font-bold mb-4'>Questions</h1>
                    {/* {
                        assessment.questions.map(question => (
                            <div key={question.id} className='mt-2'>
                                <h3 className='font-semibold'>{question.text}</h3>
                                <select>
                                    {Object.entries(question.options).map(([key, value]) => (
                                        <option key={key} value={key}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))
                    } */}
                    <Link to={`/assessmentDetail/${assessment.id}`} className='bg-black text-white p-2 text-xl'>Take Assessment</Link>
                </div>
            ))}

        </div>
    )
}

export default AssessmentList
