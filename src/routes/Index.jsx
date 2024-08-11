import CourseCard from "../components/CourseCard";

const Index = () => {
  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <h1>Courses</h1>
      </div>

      <div className="m-5 m-md-5 d-md-flex flex-md-wrap  justify-content-md-between ">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
};

export default Index;
