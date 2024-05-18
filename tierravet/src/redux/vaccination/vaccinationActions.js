import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { fillVaccination, vaccinationFail, vaccinationRequest, addVaccination } from "./vaccinationSlice";

const COLLECTION_NAME = "vaccination";
const collectionRef = collection(dataBase, COLLECTION_NAME);

export const actionAddVaccination = (newVaccination) => {
  return async (dispatch) => {
    dispatch(vaccinationRequest());
    try {
      const vaccinationRef = await addDoc(collectionRef, newVaccination);
      console.log("vaccinationRef",vaccinationRef.id)
      dispatch(
        addVaccination({
          id: vaccinationRef.id,
          ...newVaccination,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(vaccinationFail(error.message));
    }
  };
};
