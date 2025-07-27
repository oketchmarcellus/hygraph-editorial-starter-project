// sidebar.js

export const handleScroll = (mainRef, sidebarRef, setIsSticky) => {
    if (mainRef.current && sidebarRef.current) {
        const mainScrollHeight = mainRef.current.scrollHeight;
        const sidebarHeight = sidebarRef.current.offsetHeight;

        setIsSticky(mainScrollHeight > sidebarHeight);
    }
};

export const addScrollListener = (mainRef, sidebarRef, setIsSticky) => {
    const scrollHandler = () => handleScroll(mainRef, sidebarRef, setIsSticky);
    
    window.addEventListener('scroll', scrollHandler);

    // Return a cleanup function
    return () => {
        window.removeEventListener('scroll', scrollHandler);
    };
};