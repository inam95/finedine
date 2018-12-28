import moment from "moment";
import cuid from "cuid";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/asyncAction";
import { toastr } from "react-redux-toastr";
import firebase from "../../app/config/firebase";

export const updateProfile = user => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const { isLoaded, isEmpty, ...updatedUser } = user;
  if (updatedUser.dateOfBirth !== getState().firebase.profile.dateOfBirth) {
    updatedUser.dateOfBirth = moment(updatedUser.dateOfBirth).toDate();
  }
  try {
    await firebase.updateProfile(updatedUser);
    toastr.success("Success", "Profile updated");
  } catch (error) {
    console.log(error);
  }
};

export const uploadProfileImage = (file, fileName) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const imageName = cuid();
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  const path = `${user.uid}/user_images`;
  const options = {
    name: imageName
  };

  try {
    dispatch(asyncActionStart());
    //upload the file to firebase storage
    let uploadedFile = await firebase.uploadFile(path, file, null, options);
    //get ulr of Image
    let downloadURL = await uploadedFile.uploadTaskSnapshot.downloadURL;
    //get userdoc
    let userDoc = await firestore.get(`users/${user.uid}`);
    //check if user has photo, is not updates profile with new image

    if (!userDoc.data().photoURL) {
      await firebase.updateProfile({
        photoURL: downloadURL
      });
      await user.updateProfile({
        photoURL: downloadURL
      });
    }

    //add the new photo to photos collection
    await firestore.add(
      {
        collection: "users",
        doc: user.uid,
        subcollections: [{ collection: "photos" }]
      },
      {
        name: imageName,
        url: downloadURL
      }
    );
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
    throw new Error("Problem uploading photo");
  }
};

export const deletePhoto = photo => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  try {
    await firebase.deleteFile(`${user.uid}/user_images/${photo.name}`);
    await firestore.delete({
      collection: "users",
      doc: user.uid,
      subcollections: [{ collection: "photos", doc: photo.id }]
    });
  } catch (error) {
    console.log(error);
    throw new Error("Problem deleting the photo");
  }
};

export const setMainPhoto = photo => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  try {
    return await firebase.updateProfile({
      photoURL: photo.url
    });
  } catch (error) {
    console.log(error);
    throw new Error("Problem setting main photo");
  }
};

export const likePlace = restaurant => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const user = firestore.auth().currentUser;
  const liked = {
    like: true,
    displayName: user.displayName
  };
  try {
    await firestore.update(`restaurants/${restaurant.id}`, {
      [`likedBy.${user.uid}`]: liked
    });
    await firestore.set(`restaurant_likedBy/${restaurant.id}_${user.uid}`, {
      restaurantId: restaurant.id,
      userUid: user.uid
    });
    toastr.success("Success", "You liked this place");
  } catch (error) {
    console.log(error);
    toastr.error("Oops", "Problem in operation");
  }
};

export const bookMarkPlace = restaurant => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const user = firestore.auth().currentUser;
  const bookmarked = {
    bookMark: true,
    displayName: user.displayName
  };
  try {
    await firestore.update(`restaurants/${restaurant.id}`, {
      [`bookmarkedBy.${user.uid}`]: bookmarked
    });
    await firestore.set(`restaurant_bookMarkedBy/${restaurant.id}_${user.uid}`, {
      restaurantId: restaurant.id,
      userUid: user.uid
    });
    toastr.success("Success", "You bookmarked this place");
  } catch (error) {
    console.log(error);
    toastr.error("Oops", "Problem in operation");
  }
};

export const getUserLikes = userUid => async (dispatch, getState) => {
  dispatch(asyncActionStart());
  const firestore = firebase.firestore();
  const restaurantsRef = firestore.collection("restaurant_likedBy");
  let query = restaurantsRef.where("userUid", "==", userUid);
  try {
    let querySnap = await query.get();
    console.log(querySnap);
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};
