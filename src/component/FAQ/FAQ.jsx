import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const [ind, setInd] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setInd(false)
  };

  const items = [
    {
      id: "panel1",
      index: true,
      title: "Who is Intake for?",
      description:
        "Everyone. If you snore, have trouble sleeping, wake up with a dry mouth, or want to boost your workouts — try Intake. Trust us. Actually, we considered ourselves pretty good at breathing through our nose—until we tried Intake, and realized there was a whole world of air out there that we didn’t even know we were missing. But if you do have a history of allergies, sinus infections, a deviated septum, or anything that makes it difficult for you to breathe, Intake may help greatly. ",
    },
    {
      id: "panel2",
      title: "Will it help my snoring?",
      description:
        "This is the second `$item's` accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.",
    },
    {
      id: "panel3",
      title: "Why Nasal Breathing?",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      id: "panel4",
      title: "Why magnets?",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      id: "panel5",
      title: "How Intake helps",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      id: "panel6",
      title: "How Long It Take To Work?",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      id: "panel7",
      title: "How it works",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      id: "panel8",
      title: "What about for workouts?",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      id: "panel9",
      title: "What's the cost difference?",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      id: "panel10",
      title: "Developing core web applications",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
  ];

  return (
    <section className="container mx-auto py-10 lg:py-20 px-4 md:px-0">
      <h1 className="text-[#070707] text-3xl lg:text-5xl font-semibold mb-6 lg:mb-12 text-center" data-aos="fade-up" data-aos-duration="1000"
      >
        Common Questions
      </h1>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div>
          {items.slice(0, 3).map((item) => (
            <div key={item.id} className="">
              <Accordion
                expanded={expanded === item.id || ind === item.index}
                onChange={handleChange(item.id)}
                className="accordion"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <AccordionSummary
                  expandIcon={
                    expanded === item.id ? (
                      <FiMinus className="border border-[#DADDE3] w-5 h-5 lg:w-7 lg:h-7 p-1 rounded-full" />
                    ) : (
                      <GoPlus className="border border-[#DADDE3] w-5 h-5 lg:w-7 lg:h-7 p-1 rounded-full" />
                    )
                  }
                  className="accordion-title"
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  {item.description}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
        <div>
          {items.slice(3, 9).map((item) => (
            <div key={item.id} className="">
              <Accordion
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                className="accordion"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <AccordionSummary
                  expandIcon={
                    expanded === item.id ? (
                      <FiMinus className="border border-[#DADDE3] w-7 h-7 p-1 rounded-full" />
                    ) : (
                      <GoPlus className="border border-[#DADDE3] w-7 h-7 p-1 rounded-full" />
                    )
                  }
                  className="accordion-title"
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  {item.description}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
