import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoginWithEmailAndPassword } from '../redux/auth/userAuthActions';
import Cargando from "../components/Cargando";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((store) => store.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Por favor, ingrese un correo válido")
        .required("Debe digitar su correo electrónico"),
      password: Yup.string().required("Debe digitar una contraseña"),
    }),
    onSubmit: async (values) => {
      dispatch(actionLoginWithEmailAndPassword(values));
    },
  });

  useEffect(() => {
    if (!isLoading) {
      if (!error) {
        navigate('/patients-list');
      } else {
        // Handle error, e.g., display error message to the user
        console.error("Error occurred during login:", error);
      }
    }
  }, [isLoading, error, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md border border-secondary flex flex-col items-center sm:w-80 md:w-96">
        <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 relative">
            <label htmlFor="email" className="sr-only">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Correo Electrónico"
              className="form-input mt-1 pl-10 py-2 border border-secondary bg-primary rounded-full"
              {...formik.getFieldProps('email')}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="errorText">{formik.errors.email}</div>
          ) : null}
          <div className="mb-4 relative">
            <label htmlFor="password" className="sr-only">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              className="form-input mt-1 pl-10 py-2 border border-secondary bg-primary rounded-full"
              {...formik.getFieldProps('password')}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="errorText">{formik.errors.password}</div>
          ) : null}
          <button type="submit" className="bg-secondary hover:bg-primary text-white py-3 px-16 rounded-lg mt-4">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
