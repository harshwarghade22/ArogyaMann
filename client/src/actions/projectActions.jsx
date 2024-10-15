/* eslint-disable no-unused-vars */
import { SIGNUP_PROJECT_FAIL, SIGNUP_PROJECT_REQUEST, SIGNUP_PROJECT_SUCCESS,GET_BLOGS_SUCCESS,GET_BLOGS_FAIL,GET_BLOGS_REQUEST,CREATE_BLOG_REQUEST,CREATE_BLOG_SUCCESS,CREATE_BLOG_FAIL, LOGIN_PROJECT_REQUEST, LOGIN_PROJECT_SUCCESS, LOGIN_PROJECT_FAIL, LOGOUT_PROJECT, GET_ASSESSMENT_REQUEST, GET_ASSESSMENT_SUCCESS, GET_ASSESSMENT_FAIL,ASSESSMENT_DETAIL_REQUEST,ASSESSMENT_DETAIL_SUCCESS,ASSESSMENT_DETAIL_FAIL,GET_USERDETAIL_REQUEST,GET_USERDETAIL_SUCCESS,GET_USERDETAIL_FAIL,POST_RESPONSE_REQUEST,POST_RESPONSE_SUCCESS,POST_RESPONSE_FAIL,GET_DOCTORS_REQUEST,GET_DOCTORS_SUCCESS,GET_DOCTORS_FAIL,GET_RESPONSE_REQUEST,GET_RESPONSE_SUCCESS,GET_RESPONSE_FAIL,GET_DOCTOR_REQUEST,GET_DOCTOR_SUCCESS,GET_DOCTOR_FAIL,POST_QUERY_REQUEST,POST_QUERY_SUCCESS,POST_QUERY_FAIL } from "../constants/projectConstants";
import axios from 'axios'

export const signup = (name, email, password, password2) => async (dispatch) => {
    try {
        dispatch({ type: SIGNUP_PROJECT_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post('http://127.0.0.1:8000/accounts/signup/', { name, email, password, password2 }, config);

        dispatch({
            type: SIGNUP_PROJECT_SUCCESS,
            payload: data
        });

        // You may also want to save user info in local storage
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: SIGNUP_PROJECT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const getBlogs = () => async(dispatch)=>{
    try{
        dispatch({type: GET_BLOGS_REQUEST});

        const {data} = await axios.get('http://127.0.0.1:8000/listblogs/');

        dispatch({type: GET_BLOGS_SUCCESS, payload: data});
    }
    catch(error){
        dispatch({type: GET_BLOGS_FAIL, payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message});
    }
}

export const createBlog =(title,content)=> async(dispatch)=>{
    try{
        dispatch({type: CREATE_BLOG_REQUEST});

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post('http://127.0.0.1:8000/listblogs/', { title,content }, config);

        dispatch({
            type: CREATE_BLOG_SUCCESS,
            payload: data
        });
    }
    catch(error){
        dispatch({type: CREATE_BLOG_FAIL, payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,});
    }
}

export const loginProject = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_PROJECT_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        { email, password },
        config
      );
  
      dispatch({
        type: LOGIN_PROJECT_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: LOGIN_PROJECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
};



export const logoutProject = () => (dispatch) => {
localStorage.removeItem("userInfo");
dispatch({ type: LOGOUT_PROJECT });
};

export const assesmentList = () => async(dispatch) => {
  try {
    dispatch({ type: GET_ASSESSMENT_REQUEST });
    const {data} = await axios.get("http://127.0.0.1:8000/assessment/");
    dispatch({ type: GET_ASSESSMENT_SUCCESS, payload: data });

  } catch (error) {
    dispatch({ type: GET_ASSESSMENT_FAIL, payload: error.response && error.response.data.message 
      ? error.response.data.message 
      : error.message});
  }
}

export const assessmentDetail = (id) => async(dispatch) => {
  try {
    dispatch({ type: ASSESSMENT_DETAIL_REQUEST });
    const {data} = await axios.get(`http://127.0.0.1:8000/assessment/${id}/`);
    dispatch({ type: ASSESSMENT_DETAIL_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({ type: ASSESSMENT_DETAIL_FAIL, payload: error.response && error.response.data.message 
      ? error.response.data.message 
      : error.message});
  }
}

export const getUserDetails = (token,userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_USERDETAIL_REQUEST });
      const config = {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      };
      const { data } = await axios.get(`http://127.0.0.1:8000/accounts/user/${userId}/`, config); // Adjust the endpoint accordingly

      dispatch({
          type: GET_USERDETAIL_SUCCESS,
          payload: data,
      });
  } catch (error) {
      dispatch({
          type: GET_USERDETAIL_FAIL,
          payload: error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
      });
  }
};




export const postResponse = (user, assessment, responses,token) => async (dispatch) => {
  try {
    dispatch({ type: POST_RESPONSE_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.post(`http://127.0.0.1:8000/user_response/`,{user,assessment,responses}, config);
    dispatch({ type: POST_RESPONSE_SUCCESS, payload: data });

    
  } catch (error) {
    dispatch({ type: POST_RESPONSE_FAIL, payload: error.message });
  }  
}


export const getDoctors = () => async(dispatch) => {
  try {
    dispatch({ type: GET_DOCTORS_REQUEST });
    const {data} = await axios.get("http://127.0.0.1:8000/doctorsList/");
    dispatch({ type: GET_DOCTORS_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({ type: GET_DOCTORS_FAIL, payload: error.response && error.response.data.message 
      ? error.response.data.message 
      : error.message});
  }
}

export const getDoctor = (id)=> async(dispatch)=>{
  try {
    dispatch({ type: GET_DOCTOR_REQUEST });
    const {data} = await axios.get(`http://127.0.0.1:8000/doctorsList/${id}/`);
    dispatch({ type: GET_DOCTOR_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({ type: GET_DOCTOR_FAIL, payload: error.response && error.response.data.message 
     ? error.response.data.message 
      : error.message});
  }
}

export const getResponse = (userId) => async(dispatch) => {
  try {
    dispatch({ type: GET_RESPONSE_REQUEST });
    const {data} = await axios.get(`http://127.0.0.1:8000/user_response/?user=${userId}`);
    dispatch({ type: GET_RESPONSE_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({ type: GET_RESPONSE_FAIL, payload: error.response && error.response.data.message 
     ? error.response.data.message 
      : error.message});
  }
}

export const postQuery = (sender_email,subject,message,receiver_email) => async(dispatch) => {
  try {
    dispatch({ type: POST_QUERY_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post("http://127.0.0.1:8000/send-email/",{sender_email,subject,message,receiver_email}, config);
    dispatch({ type: POST_QUERY_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({ type: POST_QUERY_FAIL, payload: error.message });
  }
}



