import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import image from "/assets/aboutUs.svg";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const translatedAboutUs = [
    {
      english: "Welcome to EasyEstates, your trusted partner in the real estate journey. We are dedicated to transforming the way people buy, sell, and rent properties by providing an innovative, user-friendly platform that connects buyers and sellers seamlessly.",
      arabic: "مرحبًا بكم في EasyEstates، شريككم الموثوق في رحلة العقارات. نحن ملتزمون بتحويل طريقة شراء وبيع وتأجير العقارات من خلال توفير منصة مبتكرة وسهلة الاستخدام تربط المشترين والبائعين بسلاسة.",
    },
    {
      english: "Our mission is to simplify the real estate process with cutting-edge tools, personalized experiences, and comprehensive property listings tailored to your needs.",
      arabic: "مهمتنا هي تبسيط عملية العقارات باستخدام أدوات متطورة، وتجارب مخصصة، وقوائم عقارات شاملة مصممة لتلبية احتياجاتك.",
    },
    {
      english: "At EasyState, we believe in empowering our users with transparent information, intuitive search options, and interactive features, all designed to make your property journey as smooth and efficient as possible. Whether you're looking for your dream home, listing a property for sale, we are committed to delivering a superior real estate experience with a focus on convenience, connection, and care.",
      arabic: "في EasyState، نؤمن بتمكين مستخدمينا من خلال توفير معلومات شفافة، وخيارات بحث سهلة، وميزات تفاعلية، كلها مصممة لجعل رحلتك العقارية سلسة وفعالة قدر الإمكان. سواء كنت تبحث عن منزلك المثالي أو تقوم بإدراج عقار للبيع، نحن ملتزمون بتقديم تجربة عقارية متميزة مع التركيز على الراحة والتواصل والرعاية.",
    },
    {
      english: "Join us at EasyEstates, and let's redefine the future of real estate together.",
      arabic: "انضم إلينا في EasyEstates، ودعنا نعيد تعريف مستقبل العقارات معًا.",
    },
  ];

  const translatedPrivacy = [
    {
      en: "EasyEstates values your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information.",
      ar: "تقدّر EasyEstates خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيف نقوم بجمع معلوماتك واستخدامها وحمايتها.",
    },
    {
      en: "The EasyEstates app collects your location data only after obtaining your explicit permission, in order to provide property listings based on your location and enhance your experience within the app.",
      ar: "يقوم تطبيق EasyEstates بجمع بيانات موقعك الجغرافي فقط بعد الحصول على إذنك الصريح، وذلك لتقديم قوائم عقارات تعتمد على موقعك وتحسين تجربتك داخل التطبيق.",
    },
    {
      en: "Location data is used only while the app is running, and it is not stored or shared with any third party.",
      ar: "يتم استخدام بيانات الموقع فقط أثناء تشغيل التطبيق، ولا يتم تخزينها أو مشاركتها مع أي جهة خارجية.",
    },
    {
      en: "You can refuse or revoke location access at any time from your device settings, and you will still be able to use the app with limited features.",
      ar: "يمكنك رفض الإذن بالوصول إلى الموقع أو إلغاؤه في أي وقت من إعدادات جهازك، وسيظل بإمكانك استخدام التطبيق بميزات محدودة.",
    },
    {
      en: "We do not sell or rent your personal information. All data is handled in accordance with privacy laws and best practices.",
      ar: "لا نقوم ببيع أو تأجير معلوماتك الشخصية. يتم التعامل مع جميع البيانات وفقًا للقوانين المتعلقة بالخصوصية وأفضل الممارسات.",
    },
    {
      en: "Account deletion: Users can request to delete their accounts by contacting us at the following email address: 📧 codepeak2023@gmail.com",
      ar: "كيفية حذف الحساب: يمكن للمستخدمين طلب حذف حساباتهم عبر التواصل معنا على البريد الإلكتروني التالي: 📧 codepeak2023@gmail.com",
    },
    {
      en: "Types of data collected:",
      ar: "أنواع البيانات التي يتم جمعها:",
    },
    {
      en: "Location data (if permission is granted)",
      ar: "بيانات الموقع (في حال تم منح الإذن)",
    },
    {
      en: "Contact information (when creating an account)",
      ar: "معلومات الاتصال (عند إنشاء حساب)",
    },
    {
      en: "User preferences",
      ar: "تفضيلات المستخدم",
    },
    {
      en: "Data retention period: Data is retained for the duration of app usage and can be permanently deleted upon the user's request.",
      ar: "مدة الاحتفاظ بالبيانات: يتم الاحتفاظ بالبيانات طوال فترة استخدام التطبيق، ويمكن حذفها بشكل نهائي عند طلب ذلك من قبل المستخدم.",
    },
  ];

  useEffect(() => {
    document.title = "EasyEstates | About Us";
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
        <h3 className="font-goldman font-bold text-xl sm:text-2xl xl:text-4xl mt-12 mb-6 text-primary">{i18n.language === "ar" ? "من نحن" : "About us"}</h3>
        {translatedAboutUs.map((item, index) => (
          <p key={index} className="font-gothic font-medium sm:text-base xl:text-lg mb-4 text-greyColor xl:w-[95%]">
            {i18n.language === "ar" ? item.arabic : item.english}
          </p>
        ))}

        <h3 className="font-goldman font-bold text-xl sm:text-2xl xl:text-4xl mt-12 mb-6 text-primary">{i18n.language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}</h3>

        {translatedPrivacy.map((item, index) => (
          <p key={index} className="font-gothic font-medium sm:text-base xl:text-lg mb-4 text-greyColor xl:w-[95%]">
            {i18n.language === "ar" ? item.ar : item.en}
          </p>
        ))}
      </div>
    </main>
  );
};

export default AboutUs;
