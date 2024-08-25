/* eslint-disable no-unused-vars */
import { SIGNUP_PROJECT_FAIL, SIGNUP_PROJECT_REQUEST, SIGNUP_PROJECT_SUCCESS,GET_BLOGS_SUCCESS,GET_BLOGS_FAIL,GET_BLOGS_REQUEST,CREATE_BLOG_REQUEST,CREATE_BLOG_SUCCESS,CREATE_BLOG_FAIL, LOGIN_PROJECT_REQUEST, LOGIN_PROJECT_SUCCESS, LOGIN_PROJECT_FAIL, LOGOUT_PROJECT, GET_ASSESSMENT_REQUEST, GET_ASSESSMENT_SUCCESS, GET_ASSESSMENT_FAIL,ASSESSMENT_DETAIL_REQUEST,ASSESSMENT_DETAIL_SUCCESS,ASSESSMENT_DETAIL_FAIL,GET_USERDETAIL_REQUEST,GET_USERDETAIL_SUCCESS,GET_USERDETAIL_FAIL,POST_RESPONSE_REQUEST,POST_RESPONSE_SUCCESS,POST_RESPONSE_FAIL,GET_DOCTORS_REQUEST,GET_DOCTORS_SUCCESS,GET_DOCTORS_FAIL } from "../constants/projectConstants";

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
    };
      
export const signupProjectReducers = (state = initialState, action) => {
switch (action.type) {
    case SIGNUP_PROJECT_REQUEST:
    return {
        ...state,
        loading: true,
    };
    case SIGNUP_PROJECT_SUCCESS:
    return {
        ...state,
        loading: false,
        userInfo: action.payload,
    };
    case SIGNUP_PROJECT_FAIL:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export const getBlogsRedcuers = (state ={blogs:[]}, action) =>{
    switch(action.type){
        case GET_BLOGS_REQUEST:
            return {
                blogs:[],
                loading: true
            }
        case GET_BLOGS_SUCCESS:
            return {
                loading: false,
                blogs: action.payload
            }
        case GET_BLOGS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const createBlogReducer = (state = {}, action) =>{
    switch(action.type){
        case CREATE_BLOG_REQUEST:
            return {
                loading: true
            }
        case CREATE_BLOG_SUCCESS:
            return {
                loading: false,
                blog: action.payload
            }
        case CREATE_BLOG_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const initialState2 = {
    userInfo:null,
}

export const loginProjectReducers = (state = initialState2, action) => {
    switch (action.type) {
      case LOGIN_PROJECT_REQUEST:
        return { loading: true , isAuthenticated: false};
      case LOGIN_PROJECT_SUCCESS:
        return { loading: false,isAuthenticated: true, userInfo: action.payload };
      case LOGIN_PROJECT_FAIL:
        return { loading: false, isAuthenticated: false, error: action.payload };
      case LOGOUT_PROJECT:
        return {};
      default:
        return state;
    }
};

export const assessmentListReducers = (state={assessments:[]},action)=>{
    switch(action.type){
        case GET_ASSESSMENT_REQUEST:
            return {
                assessments:[],
                loading: true
            }
        case GET_ASSESSMENT_SUCCESS:
            return {
                loading: false,
                assessments: action.payload
            }
        case GET_ASSESSMENT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const assessmentDetailReducers = (state = {}, action) =>{
    switch(action.type){
        case ASSESSMENT_DETAIL_REQUEST:
            return {
                loading: true
            }
        case ASSESSMENT_DETAIL_SUCCESS:
            return {
                loading: false,
                assessment: action.payload
            }
        case ASSESSMENT_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const userDetailReducers = (state = {}, action) =>{
    switch(action.type){
        case GET_USERDETAIL_REQUEST:
            return {
                loading: true
            }
        case GET_USERDETAIL_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case GET_USERDETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const postResponseReducers = (state = {}, action) =>{
    switch(action.type){
        case POST_RESPONSE_REQUEST:
            return {
                loading: true
            }
        case POST_RESPONSE_SUCCESS:
            return {
                loading: false,
                response: action.payload
            }
        case POST_RESPONSE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const doctorListReducers = (state={doctors:[]},action)=>{
    switch(action.type){
        case GET_DOCTORS_REQUEST:
            return {
                doctors:[],
                loading: true
            }
        case GET_DOCTORS_SUCCESS:
            return {
                loading: false,
                doctors: action.payload
            }
        case GET_DOCTORS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

