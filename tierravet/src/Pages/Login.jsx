import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom"; // Importar NavLink
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoginWithEmailAndPassword } from '../redux/auth/userAuthActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos de Font Awesome
import Cargando from "../components/Cargando";
import Swal from 'sweetalert2';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuth } = useSelector((store) => store.auth);

  useEffect(() => {
    if (isAuth) {
      navigate('/app/patients-list'); // Corregir la redirección a la lista de pacientes
    }
  }, [isAuth, navigate]);

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
      dispatch(actionLoginWithEmailAndPassword(values)).then((response) => {
        if (response.error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.error,
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
          }).then(() => {
            navigate('/app/patients-list');
          });
        }
      });
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md border border-secondary flex flex-col items-center sm:w-80 md:w-96">
        <img src="https://s3-alpha-sig.figma.com/img/226f/96ef/def22b71dcb004d652b323420dd58ddb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k2Kw95g4bKG4~RGGuxsJr950HTtBWGY0e8jXz-e1W-G~VdBWfWL0arLyXB3EX77~IC60O~QNhflnlHDrRrWmI60Eb-tQx~DZJUSTrgQx~ZLXkA8hQMPXh8a9DOn-4yxiiga5yWFl51Uh5DEg-oR2Ty6ofIkRYRABqcNjV7IYnTXubfB55AM~P8LFZnXIhk2dHaBEQwPkPGhC0hfdbJFeNOn9URnXpt6dkBag0CI6eVffczne9bcmm~Vf5v~0xPzdKTjSo8IMuOxP0FTUM38AiJkaVjqFHCjB1yA087q6T3OfzGhE~-zXul0lt60HVPHeDWHCIP9i4Ebap16OTQ-cew__" alt="Logo" className="mb-4 w-[260px]" />
        <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 relative">
            <label htmlFor="email" className="sr-only">Correo Electrónico</label>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="text-secondary absolute left-3 top-1/2 transform -translate-y-1/2" /> {/* Icono de usuario */}
              <input
                type="email"
                id="email"
                placeholder="Correo Electrónico"
                className="form-input mt-1 pl-12 py-2 border border-secondary bg-primary rounded-full"
                {...formik.getFieldProps('email')}
              />
            </div>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="errorText">{formik.errors.email}</div>
          ) : null}
          <div className="mb-4 relative">
            <label htmlFor="password" className="sr-only">Contraseña</label>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLock} className="text-secondary absolute left-3 top-1/2 transform -translate-y-1/2" /> {/* Icono de candado */}
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                className="form-input mt-1 pl-12 py-2 border border-secondary bg-primary rounded-full"
                {...formik.getFieldProps('password')}
              />
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="errorText">{formik.errors.password}</div>
          ) : null}
          <button type="submit" className="bg-secondary hover:bg-primary text-white py-3 px-16 rounded-lg mt-4">
            {isLoading ? <Cargando /> : "Ingresar"}
          </button>
        </form>
        {/* Usar NavLink para redirigir al registro */}
        <NavLink to="/register" className="bg-primary hover:bg-secondary text-white py-3 px-16 rounded-lg mt-4 flex items-center">
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Registrarse {/* Botón de registro con icono de usuario */}
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
