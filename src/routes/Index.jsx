import CourseCard from "../components/CourseCard";

const Index = () => {
  return (
    <>
      <div class="d-flex justify-content-center my-4">
        <h1>Courses</h1>
      </div>

      <div className="container d-flex flex-wrap justify-content-between">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      </div>
      
    </>
  );
};

export default Index;
