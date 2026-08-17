import { RefRegistrationForm } from "./components/ref-registration-form";
import { SpeakerForm } from "./components/speaker-form";
import { StandardRegistrationForm } from "./components/standard-registration-form";

function App() {
  return (
    <div className="flex flex-col items-center">
      <StandardRegistrationForm />
      <RefRegistrationForm />
      <SpeakerForm />
    </div>
  );
}

export default App;
