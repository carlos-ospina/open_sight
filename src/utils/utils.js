const currentDate = new Date();


export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function daysPassedSince(dateString) {
    const createdDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInTime = currentDate - createdDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    return differenceInDays;
}