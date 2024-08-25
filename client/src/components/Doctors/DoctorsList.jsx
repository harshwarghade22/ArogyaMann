import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctors } from '../../actions/projectActions'

const DoctorsList = () => {

    const dispatch = useDispatch()
    const listDoctors = useSelector(state => state.listDoctors)
    const { doctors } = listDoctors

    useEffect(() => {
        dispatch(getDoctors())
    }, [dispatch])

    console.log(doctors)

    return (


        <div className='w-full'>
            <h2 className='text-4xl text-center font-bold mb-5'>Doctors List</h2>
            <div className='w-80% mx-20 mt-5 flex justify-around flex-wrap'>
                {doctors && doctors.map(doctor => (
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : {doctor.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Specializtion in: {doctor.specialization}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Level Handled: {doctor.level}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                ))}
                

            </div>
        </div>
    )
}

export default DoctorsList