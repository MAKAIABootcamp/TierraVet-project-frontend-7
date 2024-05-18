import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { fillPatients, patientsFail, patientsRequest, addPatients } from "./patientSlice";

const COLLECTION_NAME = "patients";
const collectionRef = collection(dataBase, COLLECTION_NAME);

export const actionAddPatient = (newPatient) => {
  return async (dispatch) => {
    dispatch(patientsRequest());
    try {
      const patientRef = await addDoc(collectionRef, newPatient);
      console.log("patientRef",patientRef.id)
      dispatch(
        addPatients({
          id: patientRef.id,
          ...newPatient,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(patientsFail(error.message));
    }
  };
};
