import Intro from "./views/intro";
import Support from "./views/support";
import Gradient from "./views/pinkGradient";

export default function Home() {
  return (
    <div className="mx-auto">
      <Intro />
      <Support />
      <Gradient />
    </div>
  );
}
