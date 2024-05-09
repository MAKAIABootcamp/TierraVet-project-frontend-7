import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoginWithEmailAndPassword } from '../redux/auth/userAuthActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faComments, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Cargando from "../components/Cargando";
import { logout } from '../redux/auth/authSlice'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuth, isLoading, error } = useSelector(
    (store) => store.userAuth
  ) || {};

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

  if (isLoading) return <Cargando />;

  if (error) {
    Swal.fire({
      title: "Oops!",
      text: "Ha ocurrido un error en el inicio de sesión, por favor verifica tus credenciales",
      icon: "error",
    }).then((result) => {
      if(result.isConfirmed) dispatch(logout());
    });
  }

  if (isAuth && user) {
    console.log("Usuario logeado:", user); // usuario en la consola
    Swal.fire({
      title: `¡Hola ${user.name || ''}!`,
      text: "Has iniciado sesión exitosamente",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) navigate("/users-list"); // Redirecciona a users-list
    });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md border border-secondary flex flex-col items-center sm:w-80 md:w-96">
        <img
          src="https://s3-alpha-sig.figma.com/img/226f/96ef/def22b71dcb004d652b323420dd58ddb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKDbvfQXX521b7tMopxAanxInjEv6CwQcKpRdVs-hsLS9Cyhg18A~W~h3anI8FfTHEDtMmXuhqfNJO1uvqEikTpO0biJFm2-f8~EXQOkNAWP058k59VtnNXzh0dK8Z6PtmwRInxlDI7frG42Xra356T3pa1C~G9TXLVPMtkrtZnxruQC34kHh-PWB9PUnP347GgpSyQxHgr8Eob36984pTb5J-Aro2HJ8FJDpqfJ6tSMt9Uxb8CwAaDbIHTiB1zJdOrppF5S27C171LhWjlyekzv3b3Tfi0-CcYAV8eawtSVdhXF5BmzLPa1FDEpBeRBHbqZGiEc6bfWmEtB~-HUpg__"
          alt="Logo"
          className="h-48 mb-4"
        />
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
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-4 text-secondary" />
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
            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-4 text-secondary" />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="errorText">{formik.errors.password}</div>
          ) : null}
          <button type="submit" className="bg-secondary hover:bg-primary text-white py-3 px-16 rounded-lg mt-4">
            Ingresar
          </button>
          <div className="flex mt-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-secondary text-2xl mr-4" />
            <FontAwesomeIcon icon={faComments} className="text-secondary text-2xl" />
          </div>
          <button className="bg-secondary mb-4 hover:bg-primary text-white py-3 px-16 rounded-lg mt-4">
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
