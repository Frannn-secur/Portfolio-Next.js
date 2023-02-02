import { HomeTagsWrapper, Tag, TagsContainer } from "./HomeTags.styled"

const TAGS = [
    "React",
    "JavaScript",
    "Node",
    "Next",
    "PHP",
    "HTML",
    "CSS",
    "GitHub"
]

const HomeTags = () => {
    return (
        <HomeTagsWrapper>
            <TagsContainer>
                {TAGS.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </TagsContainer>
        </HomeTagsWrapper>
    )
}

export default HomeTags;