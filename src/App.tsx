import { RefRegistrationForm } from "./components/ref-registration-form";
import { StandardRegistrationForm } from "./components/standard-registration-form";

function App() {
  return (
    <div className="flex flex-col items-center">
      <StandardRegistrationForm />
      <RefRegistrationForm />
    </div>
  );
}

export default App;
