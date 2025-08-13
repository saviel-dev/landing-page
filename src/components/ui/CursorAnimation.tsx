import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const pulse = keyframes`
  0% { 
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
    transform: translateY(-50%) scale(1);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
    transform: translateY(-50%) scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    transform: translateY(-50%) scale(1);
  }
`;

const CursorWrapper = styled.span<{ $isTitle?: boolean }>`
  display: inline-flex;
  align-items: center;
  position: relative;
  padding-right: 12px;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 1.2em;
    background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
    border-radius: 4px;
    animation: 
      ${blink} 1s step-end infinite,
      ${pulse} 2s ease-in-out infinite;
    transition: all 0.2s ease;
    
    ${props => props.$isTitle && css`
      height: 1.5em;
      width: 5px;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      border-radius: 6px;
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
    `}
  }
  
  &:hover::after {
    background: linear-gradient(to bottom, #2563eb, #1e40af);
    transform: translateY(-50%) scale(1.1);
  }
`;

interface CursorAnimationProps {
  children: React.ReactNode;
  className?: string;
  isTitle?: boolean;
  delay?: number;
}

export const CursorAnimation = ({ 
  children, 
  className, 
  isTitle = false,
  delay = 0 
}: CursorAnimationProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6,
          delay: delay * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      className={className}
      style={{ display: 'inline-block' }}
    >
      <CursorWrapper $isTitle={isTitle}>
        {children}
      </CursorWrapper>
    </motion.div>
  );
};

export default CursorAnimation;
