import React from "react";
import styled from "styled-components";

const TestimonialsContainer = styled.div`
  background-color: #f8f8f8;
  padding: 40px;
  text-align: center;
`;

const TestimonialsTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const TestimonialGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const TestimonialCard = styled.div`
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

const TestimonialAuthor = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TestimonialText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Testimonials = () => {
  // Mock data for testimonials (you can replace it with real data)
  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      text: "This platform helped me enhance my cybersecurity skills. The courses were comprehensive, and the hands-on labs were fantastic. I highly recommend it!",
    },
    {
      id: 2,
      author: "Jane Smith",
      text: "I'm impressed with the quality of content and the expertise of the instructors. The interactive learning environment made the learning process enjoyable.",
    },
    {
      id: 3,
      author: "Mike Johnson",
      text: "The learning paths were well-structured and helped me progress from a beginner to an intermediate level. Thank you for this amazing platform!",
    },
  ];

  return (
    <TestimonialsContainer>
      <TestimonialsTitle>What Our Students Say</TestimonialsTitle>
      <TestimonialGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            <TestimonialText>{testimonial.text}</TestimonialText>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;
