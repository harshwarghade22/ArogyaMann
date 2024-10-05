import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assesmentList, getResponse } from '../../actions/projectActions';
import {Link} from 'react-router-dom'

const AssessmentReports = () => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const getResponses = useSelector((state) => state.getResponse);
  const { response } = getResponses;
  console.log(response);

  const assessmentListState = useSelector(state => state.assessmentList);
  const { assessments = [] } = assessmentListState;

  useEffect(() => {
    if (user?.id) {
      dispatch(getResponse(user.id));
    }
  }, [dispatch, user?.id]);

  useEffect(() => {
    dispatch(assesmentList());
  }, [dispatch]);

  const getAssessmentName = (assessmentId) => {
    const assessment = assessments.find(a => a.id === assessmentId);
    return assessment ? assessment.name : `Assessment ${assessmentId}`;
  };
  
  const calculateScore = (responses) => {
    const totalQuestions = Object.keys(responses).length;
    const totalScore = Object.values(responses).reduce((sum, answer) => sum + parseInt(answer, 10), 0);
    const maxScore = totalQuestions * 3;
    return  totalScore;
  };

  return (
    <div>
      <h1></h1>
      <div className='w-80% mx-20 mt-5 flex justify-around flex-wrap'>
        {response && response.length > 0 ? (
          response.map((assessment, index) => (
            
            <div key={index} className="assessment-report">
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{getAssessmentName(assessment.assessment)}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Completed At: {new Date(assessment.completed_at).toLocaleString()}</p>
                <Link to="/doctorsList" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
                <h1>
                  Positive response percent: {Math.round((calculateScore(assessment.responses)/9)*100)}
                </h1>
                {/* <ul>
                  {Object.entries(assessment.responses).map(([question, answer]) => (
                    <li key={question}>{answer}</li>
                  ))}
                </ul> */}
              </div>

            </div>
          ))
        ) : (
          <p>No assessment reports available.</p>
        )}
      </div>
    </div>
  );
};

export default AssessmentReports;


