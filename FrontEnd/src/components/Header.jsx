const Header = () => {
  return (
    <header
      className="bg-dark text-white text-center p-5"
      style={{
        backgroundImage: "url('/header-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1>Pizzería Mamma Mía</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
