import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'

export default function Text() {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1, color: 'pink' },
        from: { opacity: 0.2, color: 'yellow' },
        reset: true,
        reverse: flip,
        delay: 100,
        config: config.molasses,
        onRest: () => set(!flip),
    })

    return <animated.h1 style={props}>React Spring Test!</animated.h1>
}