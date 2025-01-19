import GetCertfiedheroSection from '@/components/getCertfiedheroSection/GetCertfiedheroSection';
import WhyGetCertified from '@/components/whyGetCertified/WhyGetCertified';
import CourseCatalog from '@/components/courseCatalog/CourseCatalog';
import CourseFeatures from '@/components/CourseFeatures/CourseFeatures';
import FAQsForCertified from '@/components/fAQsForCertified/FAQsForCertified';

export default function Page() {
    return (
        <>
            <GetCertfiedheroSection />
            <WhyGetCertified />
            <CourseCatalog />
            <CourseFeatures />
            <FAQsForCertified />
        </>
    );
}
