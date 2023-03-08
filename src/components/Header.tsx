import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { TbLogout } from 'react-icons/tb'
import { TiShoppingCart } from 'react-icons/ti'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2px solid black;
  height: 70px;
  .icon_wrap {
    display: flex;
    font-size: 20px;
    svg {
      margin-left: 10px;
    }
  }
`

function Header() {
  return (
    <HeaderContainer>
      <h1>Like a Local</h1>
      <div className='icon_wrap'>
        <NavLink to="/reservations"><TiShoppingCart/></NavLink>
        <div><TbLogout/></div>
      </div>
    </HeaderContainer>
  )
}



export default Header
