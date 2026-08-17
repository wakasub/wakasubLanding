import { TestimonialsMarquee } from "my-v0-project";

const topRow = [
  {
    name: "Amaka Obi",
    role: "Reseller",
    location: "Enugu",
    body: "I resell data to my whole hostel. Rates are the best I've found, and the wallet balance updates the second a sale goes through.",
  },
  {
    name: "Tunde Bakare",
    role: "Small business owner",
    location: "Ikeja",
    body: "Airtime, data and PHCN tokens from one balance. It replaced three apps I used to juggle every month.",
  },
  {
    name: "Fatima Yusuf",
    role: "Student",
    location: "Zaria",
    body: "Bought 10GB at 1am during exams and it landed before I could close the tab. Never had a failed purchase.",
  },
];

const bottomRow = [
  {
    name: "Chidi Nwosu",
    role: "Cyber café operator",
    location: "Aba",
    body: "The reseller discount pays for itself in a week. Support actually answers on WhatsApp, which is rare.",
  },
  {
    name: "Blessing Eze",
    role: "Reseller",
    location: "Port Harcourt",
    body: "I started with ₦5,000 in the wallet. Two months later it's my main income — the margins are honest.",
  },
  {
    name: "Ibrahim Sani",
    role: "Freelancer",
    location: "Abuja",
    body: "Cable TV subscription used to mean a trip to the agent. Now it's four taps and a receipt in my inbox.",
  },
];

export function TwoRows() {
  return (
    <TestimonialsMarquee
      rows={[
        { id: "row-1", items: topRow, duration: "48s" },
        { id: "row-2", items: bottomRow, duration: "56s", reverse: true },
      ]}
    />
  );
}

export function SingleRow() {
  return <TestimonialsMarquee rows={[{ id: "solo", items: topRow, duration: "44s" }]} />;
}
