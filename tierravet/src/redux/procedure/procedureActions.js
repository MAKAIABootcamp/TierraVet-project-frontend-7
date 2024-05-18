import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { fillProcedure, procedureFail, procedureRequest, addProcedure } from "./procedureSlice";

const COLLECTION_NAME = "procedure";
const collectionRef = collection(dataBase, COLLECTION_NAME);

export const actionAddProcedure = (newProcedure) => {
  return async (dispatch) => {
    dispatch(procedureRequest());
    try {
      const procedureRef = await addDoc(collectionRef, newProcedure);
      console.log("procedureRef",procedureRef.id)
      dispatch(
        addProcedure({
          id: procedureRef.id,
          ...newProcedure,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(procedureFail(error.message));
    }
  };
};
