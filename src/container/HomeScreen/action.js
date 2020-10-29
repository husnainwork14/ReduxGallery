
import { Alert } from "react-native";
import store from "../../store";
//   import { setValue } from "../../utils/storageWrapper";
//   import { ACCESS_TOKEN, PROFILE } from "../../utils/StoreKeys";



export const saveImage = (uri) => async (dispatch) => {
  try {
    console.log("saving img > ", uri);

    var allImgs = [];
    allImgs =  store.getState().homeReducer.images;
    allImgs.push(uri);
    console.log(JSON.stringify(allImgs));
    dispatch({ type: "SAVE_IMAGE", payload: allImgs })

  } catch (error) {
    console.log('Error > ', error)
  }
}
