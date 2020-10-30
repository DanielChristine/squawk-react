import React from 'react'
import '../../App.css'
import Friends from '../FriendsBar/FriendsBar'
import Login from '../Login/Login'
import Feed from '../Feed/Feed'
import EditUser from '../EditUser/EditUser'
import UserRegistration from '../UserRegistration/UserRegistration'
import FriendsList from '../FriendsList/FriendsList'
import BirdBar from '../BirdBar/BirdBar'
import { useSelector, useDispatch } from 'react-redux'
import $ from 'jquery'
import { FEED, FRIENDS, EDIT_PROFILE, CREATE_ACCOUNT } from '../../actions/types'
import MyFlock from '../MyFlock/MyFlock'

function Body(){
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const pageDisplayed = useSelector(state => state.pageDisplayed.type);
  
  if(isLogged){
    $("#navButtonsDiv").css("display", "initial")
    switch(pageDisplayed){
      case FEED:
        return (
          <div className="row">
            <BirdBar/>
            <Feed/>
            <Friends/>
            
          </div>
        )
      case FRIENDS:
        return (
          <div className="row">
            <BirdBar/>
            <MyFlock/>
            <Friends/>
          </div>
          )
      case EDIT_PROFILE:
        return (
          <div className="row">
            <BirdBar/>
            <EditUser/>
            <Friends/>
          </div>
          )    
      default:
    }
  }else if(isLogged === false && pageDisplayed === CREATE_ACCOUNT){
      return (
        <div className="row">
          <BirdBar/>
          <UserRegistration/>
          <Friends/>
        </div>
        )  
  }else{
        return (
        <div className="row">
          <BirdBar/>
          <Login/>
          <Friends/>
        </div>
      )
  } 
}

export default Body