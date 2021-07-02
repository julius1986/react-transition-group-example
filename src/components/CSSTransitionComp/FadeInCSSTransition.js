import React from 'react'
import { CSSTransition } from 'react-transition-group'
import "./CSSTransitionComp.css"

export default function FadeInCSSTransition({children, ...props}) {
    return (
        <CSSTransition {...props}>
            {children}
        </CSSTransition>
    )
}
