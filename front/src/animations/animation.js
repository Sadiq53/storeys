import gsap from 'gsap';

export const startRowAnimation = (element, direction) => {
    const startX = direction === 'left' ? '0%' : '-50%';
    const endX = direction === 'left' ? '-50%' : '0%';
  
    return gsap.fromTo(element,
        { x: startX },
        {
            x: endX,
            duration: 15,
            ease: "none",
            repeat: -1,
            runBackwards: false
        }
    );
};