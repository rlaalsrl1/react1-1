
const ThemeContext = React.createContext('light')

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <ToolBar />
        </ThemeContext.Provider>
    )
}

function ToolBar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {value => <button theme={value} />}
        </ThemeContext.Consumer>
    )
}