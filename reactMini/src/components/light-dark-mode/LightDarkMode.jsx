import "./light-dark-mode.css"
import useLocalStorage from "./useLocalStorage";

function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme','dark')

function handleTheme(){
    setTheme(theme === 'light'? 'dark ':'light')
}
console.log(theme);


  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleTheme} >Change Theme</button>
      </div>
    </div>
  );
}

export default LightDarkMode;
