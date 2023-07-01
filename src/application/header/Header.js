import React from 'react';
import { TitleContainer, Title, Company, Instructions } from '../../styles/Headerstyles';
import { HeaderContainer } from '../../styles/Containers';
const Header = () => {
    return (
        <HeaderContainer>
        <TitleContainer>
        <Title>
            Par Room Organizer
        </Title>
        <Company>
            The Everett Clinic
        </Company>
        </TitleContainer>
        
        </HeaderContainer>
    );
};

export default Header;