import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import image from "/assets/aboutUs.svg";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const translatedAboutUs = [
    {
      english:
        "Welcome to EasyEstates, your trusted partner in the real estate journey. We are dedicated to transforming the way people buy, sell, and rent properties by providing an innovative, user-friendly platform that connects buyers and sellers seamlessly.",
      arabic:
        "مرحبًا بكم في EasyEstates، شريككم الموثوق في رحلة العقارات. نحن ملتزمون بتحويل طريقة شراء وبيع وتأجير العقارات من خلال توفير منصة مبتكرة وسهلة الاستخدام تربط المشترين والبائعين بسلاسة."
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
      english: "Join us at EasyEstates, and let's redefine the future of real estate together.",
      arabic: "انضم إلينا في EasyEstates، ودعنا نعيد تعريف مستقبل العقارات معًا."
    }
  ];

  const translatedPrivacy = [
  {
    en: "EasyEstates values your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information.",
    ar: "تقدّر EasyEstates خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيف نقوم بجمع معلوماتك واستخدامها وحمايتها."
  },
  {
    en: "We collect location data to provide location-based property listings and enhance your user experience. This data is only used while the app is running and is not shared with third parties.",
    ar: "نقوم بجمع بيانات الموقع لتقديم قوائم عقارات تعتمد على الموقع وتحسين تجربتك. يتم استخدام هذه البيانات فقط أثناء تشغيل التطبيق ولا تتم مشاركتها مع جهات خارجية."
  },
  {
    en: "We do not sell or rent your personal information. All data is handled in accordance with applicable privacy laws and best practices.",
    ar: "لا نقوم ببيع أو تأجير معلوماتك الشخصية. يتم التعامل مع جميع البيانات وفقًا للقوانين المتعلقة بالخصوصية وأفضل الممارسات."
  },
  {
    en: "How to Delete Your Account:\nUsers can request account deletion by contacting us at:\n📧 codepeak2023@gmail.com",
    ar: "كيفية حذف الحساب:\nيمكن للمستخدمين طلب حذف حساباتهم عبر التواصل معنا على البريد الإلكتروني التالي:\n📧 codepeak2023@gmail.com"
  },
  {
    en: "Types of Data Collected:\n- Location data (if permission is granted)\n- Contact information (when creating an account)\n- User preferences",
    ar: "أنواع البيانات التي يتم جمعها:\n- بيانات الموقع (في حال تم منح الإذن)\n- معلومات الاتصال (عند إنشاء حساب)\n- تفضيلات المستخدم"
  },
  {
    en: "Data Retention Period:\nWe retain data as long as the app is being used. Data can be permanently deleted upon user request.",
    ar: "مدة الاحتفاظ بالبيانات:\nيتم الاحتفاظ بالبيانات طوال فترة استخدام التطبيق، ويمكن حذفها بشكل نهائي عند طلب ذلك من قبل المستخدم."
  }
];

  useEffect(() => {
    document.title = "EasyEstates | About Us";
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
         <h3 className="font-goldman font-bold text-xl sm:text-2xl xl:text-4xl mt-12 mb-6 text-primary">
          {i18n.language === "ar" ? "من نحن" : "About us"}
        </h3>
        {translatedAboutUs.map((item, index) => (
          <p
            key={index}
            className="font-gothic font-medium sm:text-base xl:text-lg mb-4 text-greyColor xl:w-[95%]"
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
            {i18n.language === "ar" ? item.ar : item.en}
          </p>
        ))}
      </div>
    </main>
  );
};

export default AboutUs;
