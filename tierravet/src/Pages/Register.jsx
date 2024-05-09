import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { actionRegisterWithEmailAndPassword } from '../redux/auth/userAuthActions'; 
import Cargando from "../components/Cargando";
import Swal from 'sweetalert2';
import { logout } from "../redux/auth/authSlice";

const passwordRegex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, isLoading, error } = useSelector(store => store.auth);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "El nombre no debe exceder los 20 caracteres")
        .required("Debe digitar su nombre completo"),
      email: Yup.string()
        .email("Por favor ingrese un correo válido")
        .required("Debe digitar su correo electrónico"),
      password: Yup.string()
        .required("Debe digitar una contraseña")
        .matches(
          passwordRegex,
          "La contraseña debe tener al menos un dígito, una minúscula, una mayúscula y al menos un caracter no alfanumérico, y debe tener entre 8 y 16 caracteres."
        ),
      confirmPassword: Yup.string()
        .required("Debe confirmar su contraseña")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    onSubmit: async (values) => {
      dispatch(actionRegisterWithEmailAndPassword(values));
    },
  });

  if (isLoading) return <Cargando />;

  if (error) {
    Swal.fire({
      title: "Oops!",
      text: "Ha ocurrido un error en la creación de la cuenta",
      icon: "error",
    }).then((result) => {
      if (result.isConfirmed) dispatch(logout());
    });
  }

  if (isAuth) {
    Swal.fire({
      title: "Excelente!",
      text: "Has creado con éxito una cuenta",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md border border-secondary flex flex-col items-center sm:w-80 md:w-96">
        <img
          src="https://s3-alpha-sig.figma.com/img/226f/96ef/def22b71dcb004d652b323420dd58ddb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKDbvfQXX521b7tMopxAanxInjEv6CwQcKpRdVs-hsLS9Cyhg18A~W~h3anI8FfTHEDtMmXuhqfNJO1uvqEikTpO0biJFm2-f8~EXQOkNAWP058k59VtnNXzh0dK8Z6PtmwRInxlDI7frG42Xra356T3pa1C~G9TXLVPMtkrtZnxruQC34kHh-PWB9PUnP347GgpSyQxHgr8Eob36984pTb5J-Aro2HJ8FJDpqfJ6tSMt9Uxb8CwAaDbIHTiB1zJdOrppF5S27C171LhWjlyekzv3b3Tfi0-CcYAV8eawtSVdhXF5BmzLPa1FDEpBeRBHbqZGiEc6bfWmEtB~-HUpg__"
          alt="Logo"
          className="h-48 mb-4"
        />
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="mb-4 relative w-full">
            <label htmlFor="name" className="sr-only">Nombre</label>
            <input
              type="text"
              id="name"
              placeholder="Nombre"
              className="form-input mt-1 pl-10 py-2 border border-secondary bg-primary rounded-full w-full"
              {...formik.getFieldProps('name')}
            />
            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-4 text-secondary" />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="errorText">{formik.errors.name}</div>
          ) : null}
          <div className="mb-4 relative w-full">
            <label htmlFor="email" className="sr-only">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Correo Electrónico"
              className="form-input mt-1 pl-10 py-2 border border-secondary bg-primary rounded-full w-full"
              {...formik.getFieldProps('email')}
            />
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-4 text-secondary" />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="errorText">{formik.errors.email}</div>
          ) : null}
          <div className="mb-4 relative w-full">
            <label htmlFor="password" className="sr-only">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              className="form-input mt-1 pl-10 py-2 border border-secondary bg-primary rounded-full w-full"
              {...formik.getFieldProps('password')}
            />
            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-4 text-secondary" />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="errorText">{formik.errors.password}</div>
          ) : null}
          <div className="mb-4 relative w-full">
            <label htmlFor="confirmPassword" className="sr-only">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirmar Contraseña"
              className="form-input mt-1 pl-10 py-2 border border-secondary bg-primary rounded-full w-full"
              {...formik.getFieldProps('confirmPassword')}
            />
            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-4 text-secondary" />
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="errorText">{formik.errors.confirmPassword}</div>
          ) : null}
          <button type="submit" className="bg-secondary hover:bg-primary text-white py-3 px-16 rounded-lg mt-4 w-full">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
