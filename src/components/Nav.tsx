import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';


const NavWrapper = styled.div`
  background: white;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height:24px;
  > ul {
    display:flex;
    > li {
      width:33.333%;
      text-align:center;
      > a {
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:4px 0;
        color: #666;
        .icon {
          width:24px;
          height:24px;
          fill:#666
        }
        &.selected{
          background: #F4CA75;
          color:#040202;
          .icon {
            fill:#040202;
          }
        }
      }
      
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag" />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/Statistics" activeClassName="selected">
            <Icon name="chart" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;