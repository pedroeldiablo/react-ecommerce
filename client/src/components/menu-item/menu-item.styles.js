import styled from 'styled-components';
import { motion } from 'framer-motion';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const upAndIn = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1},
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: {...transition}
  }
};

export const MenuItemContainer = styled(motion.div).attrs(() => ({
  variants: upAndIn, 
  className: 'menuItem'}))`
    min-width: 30%;
    height: ${({ size }) => ( size ? '340px' : '240px')};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7.5px 15px;
    overflow: hidden;
    
    &.large {
      height: 380px;
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }

    &:hover {
      cursor: pointer;
    
      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
    
      & .content {
        opacity: 0.9;
      }
    }
    

    .background-image {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
    }
  
    .content {
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* border: 1px solid black; */
      background-color: white!important;
      opacity: 0.7;
      position: absolute;
  
      .title {
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;
        color: #4a4a4a;
      }
  
      .subtitle {
        font-weight: lighter;
        font-size: 16px;
      }
    }

    @media screen and (max-width: 800px) {
        height: 200px;
        width: 100%;
        justify-content: left;

        .content {
            margin: 10px;
        }
    }
  `;
