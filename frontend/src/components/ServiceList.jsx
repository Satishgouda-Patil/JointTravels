import ServiceCard from "./ServiceCard";
import { Hotel, Plane, Pyramid } from "lucide-react";

const services = [
  {
    icon: <Hotel className="text-blue-500" />,
    title: "Trips & Treks",
    desc: "Experience handpicked trips and treks designed for every kind of explorer. From peaceful getaways to challenging trails, we plan it all with complete care.",
  },
  {
    icon: <Plane className="text-blue-500" />,
    title: "Hotel & Room Booking",
    desc: "Stay comfortably wherever you go. We arrange budget rooms to premium stays based on your travel style and preferences.",
  },
  {
    icon: <Pyramid className="text-blue-500" />,
    title: "Corporate & Customised Group Trips",
    desc: "Whether it’s a team outing or a special group adventure, we organise fully customised itineraries tailored to your schedule, interests, and comfort.",
  },
  // {
  //   icon: <Pyramid className="text-blue-500" />,
  //   title: "Adventure Treks",
  //   desc: "Take on thrilling treks with experienced coordinators. Perfect for beginners and seasoned trekkers looking to explore new terrains.",
  // }
];

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((item, index) => (
        <ServiceCard item={item} key={index} />
      ))}
    </div>
  );
};

export default ServiceList;
