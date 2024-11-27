import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import image from "/assets/aboutUs.svg";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const translatedList = [
    {
      english: "Welcome to EasyEstate, your trusted partner in the real estate journey. We are dedicated to transforming the way people buy, sell, and rent properties by providing an innovative, user-friendly platform that connects buyers and sellers seamlessly.",
      arabic: "مرحبًا بكم في EasyEstate، شريككم الموثوق في رحلة العقارات. نحن ملتزمون بتحويل طريقة شراء وبيع وتأجير العقارات من خلال توفير منصة مبتكرة وسهلة الاستخدام تربط المشترين والبائعين بسلاسة."
    },
    {
      english: "Our mission is to simplify the real estate process with cutting-edge tools, personalized experiences, and comprehensive property listings tailored to your needs.",
      arabic: "مهمتنا هي تبسيط عملية العقارات باستخدام أدوات متطورة، وتجارب مخصصة، وقوائم عقارات شاملة مصممة لتلبية احتياجاتك."
    },
    {
      english: "At EasyEstate, we believe in empowering our users with transparent information, intuitive search options, and interactive features, all designed to make your property journey as smooth and efficient as possible. Whether you're looking for your dream home, listing a property for sale, we are committed to delivering a superior real estate experience with a focus on convenience, connection, and care.",
      arabic: "في EasyEstate، نؤمن بتمكين مستخدمينا من خلال توفير معلومات شفافة، وخيارات بحث سهلة، وميزات تفاعلية، كلها مصممة لجعل رحلتك العقارية سلسة وفعالة قدر الإمكان. سواء كنت تبحث عن منزلك المثالي أو تقوم بإدراج عقار للبيع، نحن ملتزمون بتقديم تجربة عقارية متميزة مع التركيز على الراحة والتواصل والرعاية."
    },
    {
      english: "Join us at EasyEstate, and let's redefine the future of real estate together.",
      arabic: "انضم إلينا في EasyEstate، ودعنا نعيد تعريف مستقبل العقارات معًا."
    }
  ];
  

  useEffect(() => {
    document.title = "Easy Estates | About Us";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-2 sm:px-8 xl:px-12 pt-8 pb-10">
        <h2 className="font-goldman font-bold text-xl sm:text-3xl md:text-5xl xl:text-6xl">{t("aboutUsHeader")}</h2>
      </div>
      <div className="w-full mb-8">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="container mx-auto px-2 sm:px-8 xl:px-12 py-8">
        {translatedList.map((item, index) => (
          <p key={index} className="font-gothic font-semibold sm:text-lg xl:text-2xl mb-6 text-greyColor xl:w-[95%]">
            {i18n.language === "ar" ? item.arabic : item.english}
          </p>
        ))}
      </div>
    </main>
  );
};

export default AboutUs;
