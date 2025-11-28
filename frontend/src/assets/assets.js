import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import earth from "./earth.png";
import headerimg from "./headerimg.png";

import { Compass, MapPin, UsersRound } from "lucide-react";
import user from "./profile_icon.png";

export const assets = {
  facebook_icon,
  instagram_icon,
  twitter_icon,
  earth,
  headerimg,
  user,
};

export const stepsData = [
  {
    title: "Location",
    description:
      "Where do you plan? We'll suggest the ideal spot for your trip.",
    icon: MapPin,
  },
  {
    title: "Distance",
    description:
      "Range from your place. Pick the ideal range for your trip.",
    icon: Compass,
  },
  {
    title: "Comfort Level",
    description:
      "Choose how relaxed or luxurious you want your trip experience to be..",
    icon: UsersRound,
  },
];