import React, { Component } from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const StyledNav = styled.div`
  @media screen and (max-width:450px) {
    position: fixed;
    display: flex;  
    flex: 1;
    bottom: 0;
    margin: 0;
    width: 100%;
    z-index: 3;
    max-height: 56px;
    /* max-width: 450px; */
    background: #fff;
    /* box-shadow: 0 10px 30px rgba(0,0,0,0.3); */
    ul {
      align-items: center;
      max-height: 56px;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: space-between;
    }
    li {
      list-style: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    li a {
      text-decoration: none;
      padding: 0 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #000 !important;
      flex: 1;
      svg {
        padding-top: 5px;
        flex: 1;
      }
      p {
        margin-top: 0;
        margin-bottom: 0px;
      }
    }
  }
`
// icons 
import PageIcon from './icons/PageIcon';
import AtomIcon from './icons/AtomIcon';
import OrganismIcon from './icons/OrganismIcon';
import MoleculeIcon from './icons/MoleculeIcon';
class BottomNav extends Component {
  render() {
    return (
      <StyledNav className="bottomNav">
          <ul>
            <li>
              <Link href="/atoms">
                <a>
                  <AtomIcon 
                    height={25}
                    width={25}
                    fill="#000"
                  />
                  <p>Atoms</p>
                </a>
              </Link>           
            </li>
            <li>
              <Link href="/molecules">
                <a>
                  <MoleculeIcon
                    height={25}
                    width={25}
                    fill="#000"
                  />
                  <p>Molecule</p>
                </a>
              </Link>                   
            </li>
            <li>
              <Link href="/organisms">
                <a>
                  <OrganismIcon 
                    height={25}
                    width={25}
                    fill="#000"
                  />
                  <p>Organisms</p>
                </a>
              </Link>                 
            </li>
            <li>
              <Link href="/templates">
                <a>
                  <PageIcon
                    height={25}
                    width={25}
                    fill="#000"
                  />
                  <p>Templates</p>
                </a>
              </Link>         
            </li>
            <li>
              <a href="/">
                {/*icon */}
                <PageIcon
                  height={25}
                  width={25}
                  fill="#000"
                />
                <p>Pages</p>
              </a>
            </li>
          </ul>
        </StyledNav>
    )
  }
}
export default BottomNav;