import {combineReducers,createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { assessmentDetailReducers, assessmentListReducers, createBlogReducer, doctorListReducers, getBlogsRedcuers, loginProjectReducers, postResponseReducers, signupProjectReducers, userDetailReducers } from './reducers/projectReducers';




const rootReducer = combineReducers({
    userSignup:signupProjectReducers,
    userLogin :loginProjectReducers,
    getBlogs:getBlogsRedcuers,
    createBlog:createBlogReducer,
    assessmentList: assessmentListReducers,
    assessmentDetail:assessmentDetailReducers,
    userDetails:userDetailReducers,
    postResponse:postResponseReducers,
    listDoctors:doctorListReducers
})



const middleware=[thunk]


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;