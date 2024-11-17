import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = () => {
  const list = [
    {
      id: "1",
      title: "How do I list my property on EasyEstate?",
      answer: "Listing your property is easy! Simply create an account, fill out the property details, upload high-quality images, and set your asking price. Once submitted, your listing will go live and be visible to potential buyers.",
    },
    {
      id: "2",
      title: "Is there a fee to list my property?",
      answer: "Basic listings on EasyEstate are free! However, we also offer premium listing options to give your property more visibility through featured placements and enhanced marketing.",
    },
    {
      id: "3",
      title: "Can I edit my listing after it’s posted?",
      answer: "Yes, you can edit your listing at any time by logging into your account. You can update property details, adjust the price, or change photos whenever needed.",
    },
    {
      id: "4",
      title: "How long does it take for my listing to appear on the site?",
      answer: "Once you submit your property, it typically takes 24-48 hours for the listing to be reviewed and published on the site.",
    },
    {
      id: "5",
      title: "Can I list multiple properties at once?",
      answer: "Yes, if you're an agent or a developer, you can list multiple properties. We offer tools that make it easy to manage several listings from a single account. ",
    },
  ];
  return (
    <main className="container mx-auto px-2 sm:px-8 xl:px-24 pt-8 pb-16 minHeight font-gothic">
      <Accordion type="single" collapsible className="w-full">
        {list.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="accordion-shadow px-2 rounded-lg mb-6">
            <AccordionTrigger className="font-bold text-[22px] text-darkGrey">{item.title}</AccordionTrigger>
            <AccordionContent className="text-base font-medium">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default FAQS;
