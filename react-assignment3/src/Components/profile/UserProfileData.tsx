import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import UserProfile from '../../model/UserProfile';
import DisplayUserProfile from '../profile/DisplayUserProfile'
import DisplayUserProfileService from '../../service/DisplayUserProfileService';

const UserProfileData = () => {
      const [userProfile,setUserProfile] = useState<UserProfile>();
      console.log("Userprofile data before service call in UP comp :: "+JSON.stringify(userProfile))    
      const displayUserProfile = DisplayUserProfileService();
      displayUserProfile.then(data => {
      console.log("Userprofile data after service call in UP comp :: "+JSON.stringify(data))
        if(userProfile === undefined){
        setUserProfile(data);
        }     
        })
      console.log("Userprofile data after set state in UP comp :: "+JSON.stringify(userProfile))    
 
      const refreshUserProfileUpdate =(usrProfileObj:any) => {
        console.log("news data in refreshUserProfileUpdate before UserProfileData Component:::"+JSON.stringify(userProfile));
       // if (news.length === 0) {
        setUserProfile(usrProfileObj)
        //}
        console.log("news data in refreshUserProfileUpdate after UserProfileData Component:::"+JSON.stringify(userProfile));
      }
      let userProfileData;
  if(userProfile !== undefined){
      userProfileData  =  <DisplayUserProfile key={userProfile.userId} uData={userProfile} refreshUserProfileUpdate={refreshUserProfileUpdate}/>
  }else{
      userProfileData = "Something Went Wrong......";
  }
   
      return (
            <Grid container  direction = "row" item xs={12} alignItems="center" justify="space-evenly" style={{marginTop:'16vh'}}>
                       {userProfileData}
            </Grid>
            )

}

export default UserProfileData;