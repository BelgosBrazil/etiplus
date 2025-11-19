const Header = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=551123918669&text=Olá! Poderia me fornecer mais informações sobre as suas pulseiras?&type=phone_number&app_absent=0";

  return (
    <header 
      className="w-full py-4 px-6 sticky top-0 z-50"
      style={{
        background: "linear-gradient(130deg, #0D0B2E 0%, #2C62A7 100%)",
        boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.1)"
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="https://etiplus.com.br" className="block">
            <img
              src="https://etiplus.com.br/wp-content/uploads/2021/08/logo-etiplus-branco.png"
              srcSet="https://etiplus.com.br/wp-content/uploads/2021/08/logo-etiplus-branco.png 2087w, https://etiplus.com.br/wp-content/uploads/2021/08/logo-etiplus-branco-300x80.png 300w, https://etiplus.com.br/wp-content/uploads/2021/08/logo-etiplus-branco-1536x408.png 1536w, https://etiplus.com.br/wp-content/uploads/2021/08/logo-etiplus-branco-2048x545.png 2048w, https://etiplus.com.br/wp-content/uploads/2021/08/logo-etiplus-branco-600x160.png 600w"
              sizes="(max-width: 2087px) 100vw, 2087px"
              alt="Etiplus"
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>
        
        <div className="hidden md:flex items-center">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="text-sm font-medium">(11) 2391-8669</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
