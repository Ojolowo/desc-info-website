import { Navbar } from "components/navbar";
import { EventsContainer } from "containers/events-container/events.container";

export default function Events() {
   return (
      <>
         <Navbar />
         <EventsContainer />;
      </>
   );
}
