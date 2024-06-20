import Logo from "../logo/Logo";
import Input from "../input/Input";
import "./hero.css";

export default function Hero({ onSendMessage }) {
  return (
    <div className="hero">
      <Logo />
      <div className="input-container">
        <Input onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}
