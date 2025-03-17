import MainLayout from '@/Layouts/MainLayout';
import HeroArea from './Components/HeroSlider/HeroArea';
import FeatureArea from './Components/FeatureArea';
import CategoriesArea from './Components/CategoriesArea';
import CoursesArea from './Components/CoursesArea';
import CoursesArea2 from './Components/CoursesArea2';
import FunfactArea from './Components/FunfactArea';
import GetStartArea from './Components/GetStartArea';
import TestimonialArea from './Components/TestimonialArea/TestimonialArea';
import AboutUsArea from './Components/AboutUsArea';
import StartLearningArea from './Components/StartLearningArea';
import { usePage } from '@inertiajs/react';

const Home = () => {
  const { categories, allCategories, courses } = usePage().props;

  return (
    <MainLayout>
      <HeroArea />
      <FeatureArea />
      <CategoriesArea categories={categories} />
      <CoursesArea allCategories={allCategories} courses={courses} />
      {/* <CoursesArea2 /> */}
      <FunfactArea />
      <GetStartArea />
      <TestimonialArea />
      <div className="section-block"></div>
      <AboutUsArea />
      <StartLearningArea />
    </MainLayout>
  );
};

export default Home;
