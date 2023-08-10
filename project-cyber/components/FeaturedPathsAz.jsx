import React from "react";
import styled from "styled-components";

const FeaturedPathsContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  text-align: center;
`;

const FeaturedPathsTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const PathGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const PathCard = styled.div`
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

const PathTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PathDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const PathButton = styled.a`
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

const FeaturedPaths = () => {
  // Mock data for featured paths (you can replace it with real data)
  const featuredPaths = [
    {
      id: 1,
      title: "Hücumedici Pentestinq",
      description: "Bu yol qabaqcıl hücum təhlükəsizlik texnikalarına və pentest metodologiyalarına diqqət yetirir.",
    },
    {
      id: 2,
      title: "Kiber Müdafiə",
      description: "Kiber Müdafiə yolu kibertəhlükələrdən qorunmaq üçün güclü müdafiə və insidentlərə cavab vermə bacarıqlarının yaradılmasına diqqət yetirir.",
    },
    {
      id: 3,
      title: "Qırmızı Komanda",
      description: "Qırmızı Komanda yolu real dünyada kiberhücumları simulyasiya etmək və müdafiəni təkmilləşdirmək istəyən kibertəhlükəsizlik peşəkarları üçündür.",
    },
  ];

  return (
    <FeaturedPathsContainer>
      <FeaturedPathsTitle>Seçilmiş Öyrənmə Yolları</FeaturedPathsTitle>
      <PathGrid>
        {featuredPaths.map((path) => (
          <PathCard key={path.id}>
            <PathTitle>{path.title}</PathTitle>
            <PathDescription>{path.description}</PathDescription>
            <PathButton href="#">Explore Path</PathButton>
          </PathCard>
        ))}
      </PathGrid>
    </FeaturedPathsContainer>
  );
};

export default FeaturedPaths;
