import React, { useState, useEffect } from 'react';
import '../AnimeDetails/Profile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ProfilePage = () => {
  const [name, setName] = useState(localStorage.getItem('userName') || 'My Name');
  const [photoUrl, setPhotoUrl] = useState(getProfilePhoto());

  function getProfilePhoto() {
    const base64Photo = localStorage.getItem('userPhotoBase64');
    if (base64Photo) {
      return base64Photo;
    }
    return localStorage.getItem('userPhoto') || null;
  }

  const [isUpdated, setIsUpdated] = useState(false); // Track whether both name and photo are updated

  useEffect(() => {
    // Check if both name and photo are updated, then enable the Proceed button
    if (name !== 'My Name' && photoUrl) {
      setIsUpdated(true);
    } else {
      setIsUpdated(false);
    }
  }, [name, photoUrl]);

  const handleEditProfile = () => {
    const newName = prompt();

    if (newName) {
      setName(newName);
      localStorage.setItem('userName', newName); // Store the updated name in local storage
      toast('Your Profile name is successfully updated!');
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const photoBase64 = event.target.result;
        setPhotoUrl(photoBase64);
        localStorage.setItem('userPhotoBase64', photoBase64); // Store the updated photo as Base64 in local storage
        toast.success('Profile photo updated');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userPhotoBase64');
    
    toast.success("You have successfully logged out");
    setTimeout(() => {
      window.location.href = '/'; // Redirect to the desired URL (e.g., login page)
    }, 1500);
  };

  const [showProceedButton, setShowProceedButton] = useState(false);

  const handleProceed = () => {
    toast.success('YOU\'RE GOOD TO GO, WELCOME TO ANIME WORLD🔥'); // Display a success toast
    setShowProceedButton(true); // Set the state to make the "Proceed" button visible
    // Add any other actions you want to perform when the "Proceed" button is clicked.
  };
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">
                <a href="Home">
                  <img src="img/logo2.png" alt="ScreenPlay" style={{ width: 100, height: 50 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <br></br>
      <h3 style={{color:'#fff',textAlign:'center'}}>Complete your profile 🚀</h3>
      <div className="profile-page">
        <div className="profile-header">
          <div className="profile-photo-container">
            <input
              type="file"
              accept="image/*"
              id="photo-upload-input"
              style={{ display: 'none' }}
              onChange={handlePhotoUpload}
            />
            <label htmlFor="photo-upload-input">
              {photoUrl ? (
                <img className="profile-photo" src={photoUrl} alt="" />
              ) : (
                <div className="profile-placeholder">Add Photo</div>
              )}
            </label>
          </div>
          <h2 className="profile-name">{name}</h2>
        </div>
        <div className="profile-actions">
          <button className="edit-button" onClick={handleEditProfile}>
            Edit Name
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
         {isUpdated && (
       <button className="edit-button" style={{ backgroundColor: 'red', }}>
       <a href="Home" style={{ textDecoration: 'none', color: '#fff', }} onClick={handleProceed}>
        Let's Go
       </a>
     </button>
          )}
           <ToastContainer />
        </div>
      </div>
     
    </div>
    
  );
};

export default ProfilePage;
