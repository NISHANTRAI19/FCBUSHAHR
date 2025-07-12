import {
  Dumbbell,
  Utensils,
  BookOpenCheck,
  Dribbble,
  MountainSnow,
  Users2,
} from "lucide-react";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" }, // Formerly "Features"
  { label: "Fixtures", href: "#fixtures" }, // Could be live scores or upcoming matches
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const testimonials = [
  {
    user: "Aryan Negi",
    role: "U16 Player",
    image: user1,
    text: "Training at FC Bushahr completely changed how I see the game. From strength work to strategy, everything is world-class.",
  },
  {
    user: "Meena Thakur",
    role: "Parent of U14 Player",
    image: user2,
    text: "My son gained discipline, fitness, and confidence. The coaches here genuinely care about every child’s growth on and off the field.",
  },
  {
    user: "Karan Mehta",
    role: "Senior Squad Midfielder",
    image: user3,
    text: "The tactical sessions and conditioning programs at FC Bushahr are unmatched. I feel sharper and more prepared every game.",
  },
  {
    user: "Ravi Rawat",
    role: "Winter Camp Participant",
    image: user4,
    text: "The winter camp was a fantastic experience. The drills were intense but fun, and I made so many new friends while improving my game.",
  },
  {
    user: "Sneha Rana",
    role: "Parent",
    image: user5,
    text: "The club not only trains players but builds strong character. I love the balance of nutrition, teamwork, and game knowledge they provide.",
  },
  {
    user: "Tenzin Dorje",
    role: "U18 Goalkeeper",
    image: user6,
    text: "As a keeper, I needed specialized coaching. FC Bushahr gave me focused training that I never got anywhere else.",
  },
];

export const features = [
  {
    icon: <Dumbbell />,
    text: "Strength & Conditioning",
    description:
      "Structured physical training programs to improve agility, endurance, power, and injury prevention for all age groups.",
  },
  {
    icon: <Utensils />,
    text: "Nutrition Guidance",
    description:
      "Personalized nutrition knowledge and meal planning to fuel performance and support recovery for athletes.",
  },
  {
    icon: <BookOpenCheck />,
    text: "Game Intelligence",
    description:
      "Tactical and theoretical football education to build smarter players who understand formations, transitions, and strategies.",
  },
  {
    icon: <Dribbble />,
    text: "Skill Development",
    description:
      "Technical coaching focused on dribbling, passing, shooting, first touch, and positional awareness.",
  },
  {
    icon: <MountainSnow />,
    text: "Seasonal Camps & Tours",
    description:
      "Join our winter and summer football camps, exposure tours, and tournaments across regions to gain competitive experience.",
  },
  {
    icon: <Users2 />,
    text: "Community & Team Spirit",
    description:
      "Fostering discipline, leadership, and unity through structured group sessions, mentorship, and team-building events.",
  },
];

export const academyLinks = [
  { href: "#programs", text: "Training Programs" },
  { href: "#camps", text: "Seasonal Camps" },
  { href: "#nutrition", text: "Nutrition Guidance" },
  { href: "#faq", text: "FAQs for Parents" },
  { href: "#enroll", text: "How to Enroll" },
];

export const clubLinks = [
  { href: "#about", text: "About FC Bushahr" },
  { href: "#fixtures", text: "Fixtures & Results" },
  { href: "#gallery", text: "Media & Highlights" },
  { href: "#team", text: "Meet the Coaches" },
  { href: "#achievements", text: "Trophies & Recognition" },
];

export const communityLinks = [
  { href: "#events", text: "Upcoming Events" },
  { href: "#trials", text: "Open Trials" },
  { href: "#newsletter", text: "Newsletter" },
  { href: "#volunteer", text: "Volunteer with Us" },
  { href: "#careers", text: "Careers at FC Bushahr" },
];
