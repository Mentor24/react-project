import styled from "styled-components";

const S = {
     NavComponent: styled.a`
          font-size: 19px;
          text-decoration: none;
          color: #000000;
          margin-right: 25px;

          &:hover {
               opacity: 0.7;
          }

          &:active {
               opacity: 0.5;
          }

          @media screen and (max-width: 850px) {
               font-size: 30px;
               width: 100%;

               &:hover {
                    opacity: 1;
                    background-color: #9fa9a3;
                    color: #ffffff;
               }

               &:active {
                    opacity: 1;
               }
          }
     `,
};

const NavComponent = ({componentName, link}) => {
     return <S.NavComponent href={link}>{componentName}</S.NavComponent>;
};

export default NavComponent;
