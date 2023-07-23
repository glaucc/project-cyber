import React from "react";
import styled from "styled-components";

const CoursesContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  text-align: center;
`;

const CoursesTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const CourseGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const CourseCard = styled.div`
  flex: 0 0 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  text-align: left;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const CourseTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const CourseButton = styled.a`
  color: #fff;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
    
  }
  `;
  
const FeaturedCourses = () => {
  // Sample data for featured courses (replace with real data)
  const courses = [
    {
      id: 1,
      title: "Cybersecurity Fundamentals",
      description: "Learn the basics of cybersecurity and essential security concepts.",
    },
    {
      id: 2,
      title: "Ethical Hacking",
      description: "Explore ethical hacking techniques and penetration testing.",
    },
    {
      id: 3,
      title: "Network Security",
      description: "Understand how to secure networks from cyber threats.",
    },
  ];

  return (
    <CoursesContainer>
      <CoursesTitle>Featured Courses</CoursesTitle>
      <CourseGrid>
        {courses.map((course) => (
          <CourseCard key={course.id}>
            <CourseTitle>{course.title}</CourseTitle>
            <CourseDescription>{course.description}</CourseDescription>
            <CourseButton href="#">Start Learning</CourseButton>
          </CourseCard>
        ))}
      </CourseGrid>
    </CoursesContainer>
  );
};

export default FeaturedCourses;
