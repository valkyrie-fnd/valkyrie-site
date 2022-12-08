import React from 'react';
import { Button } from '@mui/material';
import styles from './valk-button.module.css';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Link from '@docusaurus/Link';

interface ValkProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  startIcon: React.ReactNode
  href?: string
}
interface ExtraProps {
  component?: React.ReactNode
  href?: string
}

export function ValkButton(props: ValkProps) {
  const extraProps: ExtraProps = {}
  if (props.href) {
    // Using @docusaurus/Link prevents reload of page
    extraProps.component = Link;
    extraProps.href = props.href;
  }
  return (<Button
    {...extraProps}
    className={`${styles.valkButton} ${props.className}`}
    startIcon={props.startIcon}
    variant="contained" >
    <div className={`${styles.buttonContent}`}>
      <span>{props.children}</span>
      <ArrowForwardRoundedIcon className={`${styles.buttonArrow}`} />
    </div>
  </Button >)
}