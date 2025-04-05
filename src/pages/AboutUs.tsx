import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import image from "/assets/aboutUs.svg";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const translatedAboutUs = [
    {
      english:
        "Welcome to EasyState, your trusted partner in the real estate journey. We are dedicated to transforming the way people buy, sell, and rent properties by providing an innovative, user-friendly platform that connects buyers and sellers seamlessly.",
      arabic:
        "مرحبًا بكم في EasyState، شريككم الموثوق في رحلة العقارات. نحن ملتزمون بتحويل طريقة شراء وبيع وتأجير العقارات من خلال توفير منصة مبتكرة وسهلة الاستخدام تربط المشترين والبائعين بسلاسة."
    },
    {
      english:
        "Our mission is to simplify the real estate process with cutting-edge tools, personalized experiences, and comprehensive property listings tailored to your needs.",
      arabic:
        "مهمتنا هي تبسيط عملية العقارات باستخدام أدوات متطورة، وتجارب مخصصة، وقوائم عقارات شاملة مصممة لتلبية احتياجاتك."
    },
    {
      english:
        "At EasyState, we believe in empowering our users with transparent information, intuitive search options, and interactive features, all designed to make your property journey as smooth and efficient as possible. Whether you're looking for your dream home, listing a property for sale, we are committed to delivering a superior real estate experience with a focus on convenience, connection, and care.",
      arabic:
        "في EasyState، نؤمن بتمكين مستخدمينا من خلال توفير معلومات شفافة، وخيارات بحث سهلة، وميزات تفاعلية، كلها مصممة لجعل رحلتك العقارية سلسة وفعالة قدر الإمكان. سواء كنت تبحث عن منزلك المثالي أو تقوم بإدراج عقار للبيع، نحن ملتزمون بتقديم تجربة عقارية متميزة مع التركيز على الراحة والتواصل والرعاية."
    },
    {
      english: "Join us at EasyState, and let's redefine the future of real estate together.",
      arabic: "انضم إلينا في EasyState، ودعنا نعيد تعريف مستقبل العقارات معًا."
    }
  ];

  const translatedPrivacy = [
    {
      english:
        "EasyState values your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information.",
      arabic:
        "تقدّر EasyState خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيف نقوم بجمع معلوماتك واستخدامها وحمايتها."
    },
    {
      english:
        "We collect location data to provide location-based property listings and enhance your user experience. This data is only used while the app is running and is not shared with third parties.",
      arabic:
        "نقوم بجمع بيانات الموقع لتقديم قوائم عقارات تعتمد على الموقع وتحسين تجربتك. يتم استخدام هذه البيانات فقط أثناء تشغيل التطبيق ولا تتم مشاركتها مع جهات خارجية."
    },
    {
      english:
        "We do not sell or rent your personal information. All data is handled in accordance with applicable privacy laws and best practices.",
      arabic:
        "لا نقوم ببيع أو تأجير معلوماتك الشخصية. يتم التعامل مع جميع البيانات وفقًا للقوانين المتعلقة بالخصوصية وأفضل الممارسات."
    },
    {
      english:
        "By using EasyState, you agree to this privacy policy. If you have any questions or concerns, feel free to contact us.",
      arabic:
        "باستخدامك EasyState، فإنك توافق على سياسة الخصوصية هذه. إذا كان لديك أي استفسارات أو مخاوف، فلا تتردد في التواصل معنا."
    }
  ];

  useEffect(() => {
    document.title = "EasyState | About Us";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-2 sm:px-8 xl:px-12 pt-8 pb-10">
        <h2 className="font-goldman font-bold text-xl sm:text-3xl md:text-5xl xl:text-6xl">
          {t("aboutUsHeader")}
        </h2>
      </div>

      <div className="w-full mb-8">
        <img className="w-full" src={image} alt="" />
      </div>

      <div className="container mx-auto px-2 sm:px-8 xl:px-12 py-8">
        {translatedAboutUs.map((item, index) => (
          <p
            key={index}
            className="font-gothic font-semibold sm:text-lg xl:text-2xl mb-6 text-greyColor xl:w-[95%]"
          >
            {i18n.language === "ar" ? item.arabic : item.english}
          </p>
        ))}

        <h3 className="font-goldman font-bold text-xl sm:text-2xl xl:text-4xl mt-12 mb-6 text-primary">
          {i18n.language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
        </h3>

        {translatedPrivacy.map((item, index) => (
          <p
            key={index}
            className="font-gothic font-medium sm:text-base xl:text-lg mb-4 text-greyColor xl:w-[95%]"
          >
            {i18n.language === "ar" ? item.arabic : item.english}
          </p>
        ))}
      </div>
    </main>
  );
};

export default AboutUs;
