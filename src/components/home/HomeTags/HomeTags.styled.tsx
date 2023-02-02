import styled from "styled-components";

export const HomeTagsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 8px;
`;

export const Tag = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  width: fit-content;
  padding: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: rotate(5deg);
  }
`;