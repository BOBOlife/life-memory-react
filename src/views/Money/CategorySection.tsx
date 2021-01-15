import styled from 'styled-components';

const CategorySection = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 15px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 2px;
        background: #333;
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

export {CategorySection};