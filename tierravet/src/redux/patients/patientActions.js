import { collection } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { fillPatients, patientsFail, patientsRequest } from "./patientSlice";

const COLLECTION_NAME = "patients";
const collectionRef = collection(dataBase, COLLECTION_NAME);

export const actionAddPatient = (newPatient) => {
  return async (dispatch) => {
    dispatch(patientsRequest());
    try {
      const patientRef = addPatient(collectionRef, newPatient);
      dispatch(fillPatients({
        id:patientRef,
        ...newPatient
      }))
    } catch (error) {
      console.error(error);
      dispatch(patientsFail(error.message));
    }
  };
};
