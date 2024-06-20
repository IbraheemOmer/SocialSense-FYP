import "./result.css";

export default function Result({ result }) {
  const getColor = (sentiment) => {
    switch (sentiment) {
      case "Positive":
        return "#bdf589";
      case "Neutral":
        return "#81baf7";
      case "Negative - Respond":
        return "#fcd66d";
      case "Negative - Ignore":
        return "#fcb679";
      case "Negative - Remove":
        return "#fa9696";
      case "Crisis":
        return "#d1d1d1";
      default:
        return "white";
    }
  };

  const backgroundColor = getColor(result);

  return (
    <div className="result">
      <div className="circle" style={{ backgroundColor }}></div>
      <p>{result}</p>
    </div>
  );
}
