// @ts-nocheck

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    document.title = `Easy Estates | FAQs`;
    window.scrollTo(0, 0);
  }, []);

  const translatedList = [
    {
      id: "1",
      title: "How do I list my property on EasyEstate?",
      answer: "Listing your property is easy! Simply create an account, fill out the property details, upload high-quality images, and set your asking price. Once submitted, your listing will go live and be visible to potential buyers.",
      titleArabic: "كيف يمكنني إدراج عقاري على EasyEstate؟",
      answerArabic: "إدراج عقارك أمر سهل! قم بإنشاء حساب، واملأ تفاصيل العقار، وقم بتحميل صور عالية الجودة، وحدد السعر المطلوب. بمجرد الإرسال، سيتم نشر إدراجك ليكون مرئيًا للمشترين المحتملين."
    },
    {
      id: "2",
      title: "Is there a fee to list my property?",
      answer: "Basic listings on EasyEstate are free! However, we also offer premium listing options to give your property more visibility through featured placements and enhanced marketing.",
      titleArabic: "هل هناك رسوم لإدراج عقاري؟",
      answerArabic: "الإدراجات الأساسية على EasyEstate مجانية! ومع ذلك، نقدم أيضًا خيارات إدراج مميزة لمنح عقارك رؤية أكبر من خلال مواقع مميزة وتسويق محسّن."
    },
    {
      id: "3",
      title: "Can I edit my listing after it’s posted?",
      answer: "Yes, you can edit your listing at any time by logging into your account. You can update property details, adjust the price, or change photos whenever needed.",
      titleArabic: "هل يمكنني تعديل إدراجي بعد نشره؟",
      answerArabic: "نعم، يمكنك تعديل إدراجك في أي وقت من خلال تسجيل الدخول إلى حسابك. يمكنك تحديث تفاصيل العقار، أو تعديل السعر، أو تغيير الصور عند الحاجة."
    },
    {
      id: "4",
      title: "How long does it take for my listing to appear on the site?",
      answer: "Once you submit your property, it typically takes 24-48 hours for the listing to be reviewed and published on the site.",
      titleArabic: "كم من الوقت يستغرق ظهور إدراجي على الموقع؟",
      answerArabic: "بمجرد إرسال عقارك، يستغرق عادةً 24-48 ساعة لمراجعة الإدراج ونشره على الموقع."
    },
    {
      id: "5",
      title: "Can I list multiple properties at once?",
      answer: "Yes, if you're an agent or a developer, you can list multiple properties. We offer tools that make it easy to manage several listings from a single account.",
      titleArabic: "هل يمكنني إدراج عدة عقارات في وقت واحد؟",
      answerArabic: "نعم، إذا كنت وكيلًا أو مطورًا، يمكنك إدراج عدة عقارات. نقدم أدوات تجعل من السهل إدارة عدة إدراجات من حساب واحد."
    }
  ];

  
  return (
    <main  dir={i18n.language === "ar" ? "rtl" : "ltr"} className="container mx-auto px-2 sm:px-8 xl:px-24 pt-8 pb-16 minHeight font-gothic">
      <Accordion type="single" collapsible className="w-full">
        {translatedList.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="accordion-shadow px-2 rounded-lg mb-6">
            <AccordionTrigger className="font-bold text-[22px] text-darkGrey">{i18n.language === "ar" ? item.titleArabic : item.title}</AccordionTrigger>
            <AccordionContent className="text-base font-medium">{i18n.language === "ar" ? item.answerArabic : item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default FAQS;
