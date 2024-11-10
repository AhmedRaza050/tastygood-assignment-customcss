
import Hero from "./components/hero";
import TopMeal from "./components/topMeal";
import GetFree from "./components/getFree";
import Reservation from "./components/reservation";
import Membership from "./components/membership";
import Location from "./components/location";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopMeal />
      <GetFree />
      <Reservation />
      <Membership/>
      <Location />
    </div>
  );
}
