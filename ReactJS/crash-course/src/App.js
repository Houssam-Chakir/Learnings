const App = () => {
  const MyName = () => {
    return <h1>Houssam Chakir</h1>;
  };

  let isLoggedIn = true;
  //return
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <h2>{isLoggedIn ? <MyName /> : "Guest"}</h2>
      </header>
    </div>
  );
};

export default App;
