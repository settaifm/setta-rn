export function debounce(func, wait) {
    let timeout;

    return (...args) =>{
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};


export function throttle(func, wait) {
    let enabled=true,updatedArgs;


    return (...args) =>{

        updatedArgs=args

        if(!enabled) return

        enabled=false

        const later = () => {
            func(...updatedArgs);
            enabled=true

        };
         setTimeout(later, wait);
    };
};



