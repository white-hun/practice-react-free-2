const scaleNames = {
  c: "celsius",
  f: "fahrenheit",
};

function TemperatureInput(props) {
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>Write a temperature(Scale:{scaleNames[props.scale]});</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
