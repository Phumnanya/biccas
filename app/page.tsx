import Intro from "./views/intro";
import Support from "./views/support";

export default function Home() {
  return (
    <div className="mx-auto">
      <Intro />
      <Support />
    </div>
  );
}
