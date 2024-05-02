import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faComments, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md border border-secondary flex flex-col items-center sm:w-80 md:w-96">
        <img
          src="https://s3-alpha-sig.figma.com/img/226f/96ef/def22b71dcb004d652b323420dd58ddb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKDbvfQXX521b7tMopxAanxInjEv6CwQcKpRdVs-hsLS9Cyhg18A~W~h3anI8FfTHEDtMmXuhqfNJO1uvqEikTpO0biJFm2-f8~EXQOkNAWP058k59VtnNXzh0dK8Z6PtmwRInxlDI7frG42Xra356T3pa1C~G9TXLVPMtkrtZnxruQC34kHh-PWB9PUnP347GgpSyQxHgr8Eob36984pTb5J-Aro2HJ8FJDpqfJ6tSMt9Uxb8CwAaDbIHTiB1zJdOrppF5S27C171LhWjlyekzv3b3Tfi0-CcYAV8eawtSVdhXF5BmzLPa1FDEpBeRBHbqZGiEc6bfWmEtB~-HUpg__"
          alt="Logo"
          className="h-48 mb-4"
        />
        <div className="mb-4 relative">
          <label htmlFor="username" className="sr-only">USUARIO</label>
          <input type="text" id="username" placeholder="USUARIO" className="form-input mt-1 pl-10 py-2 border border-secondary bg-primary rounded-full" />
          <FontAwesomeIcon icon={faUser} className="absolute left-3 top-4 text-secondary" />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="sr-only">CONTRASEÑA</label>
          <input type="password" id="password" placeholder="CONTRASEÑA" className="form-input mt-1 pl-10 py-2 border border-secondary bg-primary rounded-full" />
          <FontAwesomeIcon icon={faLock} className="absolute left-3 top-4 text-secondary" />
        </div>
        <button className="bg-secondary hover:bg-primary text-white py-3 px-16 rounded-lg mt-4 lg:text-left lg:inline-block lg:mr-2 mb-2">Ingresar</button>
        <div className="flex mt-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-secondary text-2xl mr-4" />
          <FontAwesomeIcon icon={faComments} className="text-secondary text-2xl" />
        </div>
        <button className="bg-secondary mb-4 hover:bg-primary text-white py-3 px-16 rounded-lg mt-4 lg:text-left lg:inline-block lg:mr-2">
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Registrarse
        </button>
      </div>
    </div>
  );
};

export default Login;
