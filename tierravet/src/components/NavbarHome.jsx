const NavbarHome = () => {
  return (
    <nav className="bg-secondary fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 z-50">
      <div className="ml-4">
        <img
          src="https://s3-alpha-sig.figma.com/img/226f/96ef/def22b71dcb004d652b323420dd58ddb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKDbvfQXX521b7tMopxAanxInjEv6CwQcKpRdVs-hsLS9Cyhg18A~W~h3anI8FfTHEDtMmXuhqfNJO1uvqEikTpO0biJFm2-f8~EXQOkNAWP058k59VtnNXzh0dK8Z6PtmwRInxlDI7frG42Xra356T3pa1C~G9TXLVPMtkrtZnxruQC34kHh-PWB9PUnP347GgpSyQxHgr8Eob36984pTb5J-Aro2HJ8FJDpqfJ6tSMt9Uxb8CwAaDbIHTiB1zJdOrppF5S27C171LhWjlyekzv3b3Tfi0-CcYAV8eawtSVdhXF5BmzLPa1FDEpBeRBHbqZGiEc6bfWmEtB~-HUpg__"
          alt="Logo"
          className="h-16"
        />
      </div>
      <div className="mr-4">
        <button className="bg-blue-300 hover:bg-blue-400 text-white py-2 px-7 rounded-lg">
          Ingresar
        </button>
      </div>
    </nav>
  );
};

export default NavbarHome;
