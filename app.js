function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Ahmad" />
      <Welcome name="Khaled" />
      <Welcome name="Ali" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
