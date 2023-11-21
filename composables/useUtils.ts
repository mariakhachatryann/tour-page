export const useUtils = () => {
    const dateFormat = (date: any) => {
        const originalDate = new Date(date);
        const options: {} = { month: 'short', day: '2-digit', year: 'numeric' };
        const formattedDate = originalDate.toLocaleDateString('en-US', options);
    
        return formattedDate
    }
    const manageScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return { dateFormat, manageScroll }
}