const KnowMore = () => {
    return (
      <div className="relative mt-20">
        <img src="https://s3-alpha-sig.figma.com/img/e432/939a/a7cbbc67241724a723edac64e41d1d02?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oSYcGWVm7osLdQLZzJWzwZfeNLzLCHP~42ctbvaIEdRw6TgPSMWxWNHSp1M62NE8V6xqSGNtsxX7hqkqEELQRauSmpLROgHxRj7xQPgGReCYPqDmyOu647AfE-04ZRWlWuZmqELq-ldFlh32jF0HLOMJ6oj~uW4bQbgkqb5lK9WWnjck0mr9vQvxcZghA2EARR2gBGdR0WKhplT3lIBTnbN~VFEv4U6Sj64uPfx-nXZsktKMt9bX2RGpzHrEAE8o3N3YxeW6gOQP8HPACghJAJvrnAhZrfMkgLwSvERe7MrPYo5jOSMqGGGrbXFi4SjIou1KOvKj8rOS17lzE3hlqA__" alt="Fondo" className="w-full h-[600px] object-cover filter brightness-50" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <h2 className="text-5xl font-semibold text-center mb-6 mr-12 ml-12">Transformamos la atención veterinaria con innovación y pasión.</h2>
          <p className="text-lg text-center mb-12">Con TierraVet, cuidar de tu paciente es más fácil.</p>
          <button className="bg-secondary hover:bg-primary text-white py-3 px-16 rounded-lg">Conocer más</button>
        </div>
      </div>
    );
  };
  
  export default KnowMore;
  