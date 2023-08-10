import React from "react";
import styled from "styled-components";

const TestimonialsContainer = styled.div`
  background-color: #fff;
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
      author: "A. Yusifova",
      text: "Bu platforma mənə kibertəhlükəsizlik bacarıqlarımı inkişaf etdirməyə kömək etdi. Kurslar hərtərəfli idi və ən önəmlisi Azərbaycanca olması mənim üçün xüsusilə super idi. Hərkəsə tövsiyyə edirəm.",
    },
    {
      id: 2,
      author: "J. Seymurzadə",
      text: "Məzmun keyfiyyətindən və müəllimlərin təcrübəsindən heyranam. İnteraktiv təlim mühiti tədris prosesini zövqlü etdi. Fikrimcə Azərbaycanlı bir gənc üçün əvəzedilməz resursdur.",
    },
    {
      id: 3,
      author: "M. Cabbarov",
      text: "Öyrənmə yolları yaxşı qurulmuşdu və sadəliyi mənə başlanğıcdan orta səviyyəyə keçməyə asanlıqla imkan verdi. Bu heyrətamiz platforma üçün təşəkkür edirəm.",
    },
  ];

  return (
    <TestimonialsContainer>
      <TestimonialsTitle>Tələbələrimizin Dedikləri</TestimonialsTitle>
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
