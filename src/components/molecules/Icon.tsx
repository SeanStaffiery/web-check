import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brands from '@fortawesome/free-brands-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const iconMap: Record<string, IconDefinition> = {
  check: solidIcons.faCheck,
  plus: solidIcons.faPlus,
  github: brands.faGithubAlt,
  code: solidIcons.faCode,
  rocket: solidIcons.faRocket,
  copy: solidIcons.faCopy,
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  styles?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 1, color = 'currentColor', styles = '' }) => {
  if (!iconMap[name]) return null;
  
  return (
    <FontAwesomeIcon 
      className="fa-icon"
      style={{
        width: `${size}rem`,
        color: color,
      }}
      icon={iconMap[name]} 
    />
  );
};

export default Icon;
